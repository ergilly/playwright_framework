import { type Page } from '@playwright/test';
import ContactPageElements from './pageElements';
import ContactPageActions from './pageActions';

export default class ContactPage {
  readonly page: Page;
  readonly elements: ContactPageElements;
  readonly actions: ContactPageActions;

  constructor(page: Page) {
    this.page = page;
    this.elements = new ContactPageElements(page);
    this.actions = new ContactPageActions(page);
  }
}
