import { type Page } from '@playwright/test';
import SharedActions from '../Shared/sharedActions';
import LoginPageElements from './pageElements';

export default class LoginPageActions extends SharedActions {
  readonly pageElements: LoginPageElements;

  constructor(page: Page) {
    super(page);
    this.pageElements = new LoginPageElements(page);
  }

  async login(username: string, password: string): Promise<void> {
    await this.pageElements.usernameInput.fill(username);
    await this.pageElements.passwordInput.fill(password);
    await this.pageElements.submitButton.click();
  }
}
