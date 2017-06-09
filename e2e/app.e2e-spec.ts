import { TPL4Page } from './app.po';

describe('tpl4 App', () => {
  let page: TPL4Page;

  beforeEach(() => {
    page = new TPL4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
