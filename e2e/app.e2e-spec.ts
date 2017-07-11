import { XiaoleiPage } from './app.po';

describe('xiaolei App', () => {
  let page: XiaoleiPage;

  beforeEach(() => {
    page = new XiaoleiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
