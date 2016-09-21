import { TestssPage } from './app.po';

describe('testss App', function() {
  let page: TestssPage;

  beforeEach(() => {
    page = new TestssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
