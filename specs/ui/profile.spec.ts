import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';

test.describe('Profile Page', () => {
  test.beforeEach(async ({ page, loginPage, homePage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);
    await homePage.elements.navProfile.click();
  });

  test('should display user profile details', async ({ profilePage }) => {
    await expect(profilePage.elements.pageContainer).toBeVisible();
    await expect(profilePage.elements.title).toHaveText('My Profile');
    await expect(profilePage.elements.displayName).toHaveText('Admin User');
    await expect(profilePage.elements.username).toHaveText('admin');
    await expect(profilePage.elements.email).toHaveText('admin@example.com');
    await expect(profilePage.elements.role).toHaveText('Administrator');
  });

  test('should display recent activity panel', async ({ profilePage }) => {
    await expect(profilePage.elements.activityPanel).toBeVisible();
    await expect(profilePage.elements.activityLogin).toContainText('Logged in');
    await expect(profilePage.elements.activityProfileView).toContainText('Viewed profile');
    await expect(profilePage.elements.activityPlaceholder).toContainText('No previous activity');
  });
});
