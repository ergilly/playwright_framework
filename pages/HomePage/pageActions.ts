import { type Page } from '@playwright/test';
import SharedActions from '../Shared/sharedActions';
import HomePageElements from './pageElements';

export default class HomePageActions extends SharedActions {
  readonly pageElements: HomePageElements;

  constructor(page: Page) {
    super(page);
    this.pageElements = new HomePageElements(page);
  }
}
