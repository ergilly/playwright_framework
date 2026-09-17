import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page, loginPage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);
  });

  test('should open about page via quick link', async ({ homePage, aboutPage }) => {
    await homePage.elements.linkAbout.click();

    await expect(aboutPage.elements.pageContainer).toBeVisible();
    await expect(aboutPage.elements.title).toHaveText('About ReactTestApp');
  });

  test('should open contact page via quick link', async ({ homePage, contactPage }) => {
    await homePage.elements.linkContact.click();

    await expect(contactPage.elements.pageContainer).toBeVisible();
    await expect(contactPage.elements.title).toHaveText('Contact Us');
  });

  test('should open profile page via quick link', async ({ homePage, profilePage }) => {
    await homePage.elements.linkProfile.click();

    await expect(profilePage.elements.pageContainer).toBeVisible();
    await expect(profilePage.elements.title).toHaveText('My Profile');
  });
});
