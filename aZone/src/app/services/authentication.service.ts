/**
 * Created by Pavel S. on 01.06.17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


// Models
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

    public token: string;
    public userRole: string;

    // URLs to web api
    private roleUrl = 'role';

    // ENV file
    public env: string;
    // Domain
    public domain: string = 'http://localhost:8087/';

    constructor(
        private http: Http,
        private router: Router
    ) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.userRole = null;
        localStorage.removeItem('currentUser');
        // Redirect to login
        this.router.navigate(['/login']);
    }

    getUserRole(): Observable<User> {
        return new Observable(observer => {
            if (this.userRole) {
                console.log('Role was gotten from service: ',  this.userRole);
                observer.next(this.userRole);
            } else {
                const headers = new Headers({ 'Authorization': this.token });
                const options = new RequestOptions({ headers: headers });
                const url = `${this.domain}${this.roleUrl}`;

                this.http.get(url, options)
                    .map(res => res.json() as User)
                    .subscribe(
                        User => {
                            console.log('Role was gotten from server: ', User.role.role);
                            observer.next(User.role.role);
                        },
                        error => {
                            console.log('Can`t get user role', error);
                            observer.next(false);
                        }
                    );
            }
        });
    }

}
