import { type Page } from '@playwright/test';
import SharedActions from '../Shared/sharedActions';
import ContactPageElements from './pageElements';

type ContactFormInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default class ContactPageActions extends SharedActions {
  readonly pageElements: ContactPageElements;

  constructor(page: Page) {
    super(page);
    this.pageElements = new ContactPageElements(page);
  }

  async fillForm(data: ContactFormInput): Promise<void> {
    await this.pageElements.nameInput.fill(data.name);
    await this.pageElements.emailInput.fill(data.email);
    await this.pageElements.subjectSelect.selectOption(data.subject);
    await this.pageElements.messageInput.fill(data.message);
  }
}
