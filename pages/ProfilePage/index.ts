import { type Page } from '@playwright/test';
import ProfilePageElements from './pageElements';
import ProfilePageActions from './pageActions';

export default class ProfilePage {
  readonly page: Page;
  readonly elements: ProfilePageElements;
  readonly actions: ProfilePageActions;

  constructor(page: Page) {
    this.page = page;
    this.elements = new ProfilePageElements(page);
    this.actions = new ProfilePageActions(page);
  }
}
