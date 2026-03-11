import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';

test.describe('About Page', () => {
  test.beforeEach(async ({ page, loginPage, homePage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);
    await homePage.elements.navAbout.click();
  });

  test('should display page content and feature cards', async ({ aboutPage }) => {
    await expect(aboutPage.elements.pageContainer).toBeVisible();
    await expect(aboutPage.elements.title).toHaveText('About ReactTestApp');

    await expect(aboutPage.elements.featuresSection).toBeVisible();
    await expect(aboutPage.elements.featureAuthentication).toBeVisible();
    await expect(aboutPage.elements.featureRouting).toBeVisible();
    await expect(aboutPage.elements.featureForms).toBeVisible();
    await expect(aboutPage.elements.featureTestIds).toBeVisible();
    await expect(aboutPage.elements.featureAccessibility).toBeVisible();
    await expect(aboutPage.elements.featureResponsive).toBeVisible();
  });

  test('should display technology stack and purpose sections', async ({ aboutPage }) => {
    await expect(aboutPage.elements.techSection).toBeVisible();
    await expect(aboutPage.elements.purposeSection).toBeVisible();
  });
});
