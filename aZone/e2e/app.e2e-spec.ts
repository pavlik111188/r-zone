import { ZFrontPage } from './app.po';

describe('z-front App', () => {
  let page: ZFrontPage;

  beforeEach(() => {
    page = new ZFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
