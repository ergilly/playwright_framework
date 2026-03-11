import { type Locator, type Page } from '@playwright/test';
import SharedElements from '../Shared/sharedElements';

export default class ContactPageElements extends SharedElements {
  constructor(page: Page) {
    super(page);
  }

  get pageContainer(): Locator {
    return this.page.getByTestId('contact-page');
  }

  get title(): Locator {
    return this.page.getByTestId('contact-title');
  }

  get form(): Locator {
    return this.page.getByTestId('contact-form');
  }

  get nameInput(): Locator {
    return this.page.getByTestId('input-name');
  }

  get emailInput(): Locator {
    return this.page.getByTestId('input-email');
  }

  get subjectSelect(): Locator {
    return this.page.getByTestId('select-subject');
  }

  get messageInput(): Locator {
    return this.page.getByTestId('input-message');
  }

  get clearButton(): Locator {
    return this.page.getByTestId('btn-clear');
  }

  get submitButton(): Locator {
    return this.page.getByTestId('btn-submit');
  }

  get successMessage(): Locator {
    return this.page.getByTestId('contact-success');
  }

  get sendAnotherButton(): Locator {
    return this.page.getByTestId('btn-send-another');
  }

  get nameError(): Locator {
    return this.page.getByTestId('error-name');
  }

  get emailError(): Locator {
    return this.page.getByTestId('error-email');
  }

  get subjectError(): Locator {
    return this.page.getByTestId('error-subject');
  }

  get messageError(): Locator {
    return this.page.getByTestId('error-message');
  }
}
