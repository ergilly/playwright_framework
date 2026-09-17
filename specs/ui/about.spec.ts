import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';

test.describe('About Page', () => {
  test.beforeEach(async ({ page, loginPage, homePage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);
    await homePage.elements.navAbout.click();
  });

  test('should display page content and feature cards', async ({ aboutPage }) => {
    await expect(aboutPage.elements.featureAuthentication).toContainText('Authentication');
    await expect(aboutPage.elements.featureRouting).toContainText('Routing');
    await expect(aboutPage.elements.featureForms).toContainText('Forms');
    await expect(aboutPage.elements.featureTestIds).toContainText('Test IDs');
    await expect(aboutPage.elements.featureAccessibility).toContainText('Accessibility');
    await expect(aboutPage.elements.featureResponsive).toContainText('Responsive');
  });
});
