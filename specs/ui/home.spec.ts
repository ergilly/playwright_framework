import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);
  });

  test('should display home widgets after successful login', async ({ homePage }) => {
    await expect(homePage.elements.pageContainer).toBeVisible();
    await expect(homePage.elements.title).toContainText('Welcome, Admin User!');
    await expect(homePage.elements.statPages).toBeVisible();
    await expect(homePage.elements.statComponents).toBeVisible();
    await expect(homePage.elements.statTestIds).toBeVisible();
    await expect(homePage.elements.banner).toBeVisible();
  });

  test('should open about page via quick link', async ({ homePage, aboutPage }) => {
    await homePage.elements.linkAbout.click();

    await expect(aboutPage.elements.pageContainer).toBeVisible();
    await expect(aboutPage.elements.title).toHaveText('About ReactTestApp');
  });
});
