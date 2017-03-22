import { AngularInternalNotificationServicePage } from './app.po';

describe('angular-internal-notification-service App', () => {
  let page: AngularInternalNotificationServicePage;

  beforeEach(() => {
    page = new AngularInternalNotificationServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
