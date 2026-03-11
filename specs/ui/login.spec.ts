import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';

test.describe('Login', () => {
  test('should display login page', async ({ page, loginPage }) => {
    await page.goto('/login');

    await expect(loginPage.elements.pageContainer).toBeVisible();
    await expect(loginPage.elements.title).toHaveText('Welcome Back');
    await expect(loginPage.elements.usernameInput).toBeVisible();
    await expect(loginPage.elements.passwordInput).toBeVisible();
    await expect(loginPage.elements.submitButton).toBeVisible();
  });

  test('should navigate to home after valid login', async ({ page, loginPage, homePage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);

    await expect(homePage.elements.pageContainer).toBeVisible();
    await expect(homePage.elements.title).toContainText('Welcome, Admin User!');
  });

  test('should show error on invalid credentials', async ({ page, loginPage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.invalidUser.username, loginData.invalidUser.password);

    await expect(loginPage.elements.errorMessage).toBeVisible();
    await expect(loginPage.elements.errorMessage).toContainText('Invalid username or password.');
  });
});
