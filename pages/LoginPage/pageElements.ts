import { type Locator, type Page } from '@playwright/test';
import SharedElements from '../Shared/sharedElements';

export default class LoginPageElements extends SharedElements {
  constructor(page: Page) {
    super(page);
  }

  get pageContainer(): Locator {
    return this.page.getByTestId('login-page');
  }

  get title(): Locator {
    return this.page.getByTestId('login-title');
  }

  get form(): Locator {
    return this.page.getByTestId('login-form');
  }

  get usernameInput(): Locator {
    return this.page.getByTestId('input-username');
  }

  get passwordInput(): Locator {
    return this.page.getByTestId('input-password');
  }

  get submitButton(): Locator {
    return this.page.getByTestId('btn-login');
  }

  get errorMessage(): Locator {
    return this.page.getByTestId('login-error');
  }
}
