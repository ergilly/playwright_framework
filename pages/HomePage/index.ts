import { type Page } from '@playwright/test';
import HomePageElements from './pageElements';
import HomePageActions from './pageActions';

export default class HomePage {
  readonly page: Page;
  readonly elements: HomePageElements;
  readonly actions: HomePageActions;

  constructor(page: Page) {
    this.page = page;
    this.elements = new HomePageElements(page);
    this.actions = new HomePageActions(page);
  }
}
