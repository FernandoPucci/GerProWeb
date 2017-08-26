import { GerproWebPage } from './app.po';

describe('gerpro-web App', () => {
  let page: GerproWebPage;

  beforeEach(() => {
    page = new GerproWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
