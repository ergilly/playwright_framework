import { type Page } from '@playwright/test';
import LoginPageElements from './pageElements';
import LoginPageActions from './pageActions';

export default class LoginPage {
  readonly page: Page;
  readonly elements: LoginPageElements;
  readonly actions: LoginPageActions;

  constructor(page: Page) {
    this.page = page;
    this.elements = new LoginPageElements(page);
    this.actions = new LoginPageActions(page);
  }
}
