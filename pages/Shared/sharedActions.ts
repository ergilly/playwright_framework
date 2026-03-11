import { type Page } from '@playwright/test';

export default class SharedActions {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
