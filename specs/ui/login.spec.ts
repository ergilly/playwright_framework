import { test, expect } from '../fixtures';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { loginData } from '../../data/ui/loginData';

test.describe('Login', () => {
  test('should display login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
  });

  test('should navigate to home after valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login(loginData.validUser.username, loginData.validUser.password);

    await expect(homePage.heading).toBeVisible();
  });

  test('should show error on invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(loginData.invalidUser.username, loginData.invalidUser.password);

    await expect(loginPage.errorMessage).toBeVisible();
  });
});
