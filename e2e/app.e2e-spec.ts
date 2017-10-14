import { RemotegroupPage } from './app.po';

describe('remotegroup App', () => {
  let page: RemotegroupPage;

  beforeEach(() => {
    page = new RemotegroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
