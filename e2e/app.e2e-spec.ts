import { AngularShowcasePage } from './app.po';

describe('angular-showcase App', () => {
  let page: AngularShowcasePage;

  beforeEach(() => {
    page = new AngularShowcasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
