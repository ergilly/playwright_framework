import { type Page } from '@playwright/test';
import SharedActions from '../Shared/sharedActions';
import AboutPageElements from './pageElements';

export default class AboutPageActions extends SharedActions {
  readonly pageElements: AboutPageElements;

  constructor(page: Page) {
    super(page);
    this.pageElements = new AboutPageElements(page);
  }
}
