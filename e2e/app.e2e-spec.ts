import { MaterializeDPage } from './app.po';

describe('materialize-d App', function() {
  let page: MaterializeDPage;

  beforeEach(() => {
    page = new MaterializeDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
