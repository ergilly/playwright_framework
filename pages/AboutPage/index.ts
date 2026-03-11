import { type Page } from '@playwright/test';
import AboutPageElements from './pageElements';
import AboutPageActions from './pageActions';

export default class AboutPage {
  readonly page: Page;
  readonly elements: AboutPageElements;
  readonly actions: AboutPageActions;

  constructor(page: Page) {
    this.page = page;
    this.elements = new AboutPageElements(page);
    this.actions = new AboutPageActions(page);
  }
}
