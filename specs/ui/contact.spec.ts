import { test, expect } from '../fixtures';
import { loginData } from '../../data/ui/loginData';
import { contactData } from '../../data/ui/contactData';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page, loginPage, homePage }) => {
    await page.goto('/login');
    await loginPage.actions.login(loginData.validUser.username, loginData.validUser.password);
    await homePage.elements.navContact.click();
  });

  test('should show validation messages on empty submit', async ({ contactPage }) => {
    await contactPage.elements.submitButton.click();

    await expect(contactPage.elements.nameError).toHaveText('Name is required.');
    await expect(contactPage.elements.emailError).toHaveText('Email is required.');
    await expect(contactPage.elements.subjectError).toHaveText('Subject is required.');
    await expect(contactPage.elements.messageError).toHaveText('Message is required.');
  });

  test('should submit contact form with valid input', async ({ contactPage }) => {
    await contactPage.actions.fillForm(contactData.validMessage);
    await contactPage.elements.submitButton.click();

    await expect(contactPage.elements.successMessage).toBeVisible();
    await expect(contactPage.elements.successMessage).toContainText('Message Sent!');
    await expect(contactPage.elements.sendAnotherButton).toBeVisible();
  });
});
