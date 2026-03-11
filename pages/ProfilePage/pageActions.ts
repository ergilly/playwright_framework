import { type Page } from '@playwright/test';
import SharedActions from '../Shared/sharedActions';
import ProfilePageElements from './pageElements';

export default class ProfilePageActions extends SharedActions {
  readonly pageElements: ProfilePageElements;

  constructor(page: Page) {
    super(page);
    this.pageElements = new ProfilePageElements(page);
  }
}
