import { EdashPage } from './app.po';

describe('edash App', () => {
  let page: EdashPage;

  beforeEach(() => {
    page = new EdashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
