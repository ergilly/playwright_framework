import { type Locator, type Page } from '@playwright/test';
import SharedElements from '../Shared/sharedElements';

export default class HomePageElements extends SharedElements {
  constructor(page: Page) {
    super(page);
  }

  get pageContainer(): Locator {
    return this.page.getByTestId('home-page');
  }

  get title(): Locator {
    return this.page.getByTestId('home-title');
  }

  get statPages(): Locator {
    return this.page.getByTestId('stat-pages');
  }

  get statComponents(): Locator {
    return this.page.getByTestId('stat-components');
  }

  get statTestIds(): Locator {
    return this.page.getByTestId('stat-testids');
  }

  get linkAbout(): Locator {
    return this.page.getByTestId('link-about');
  }

  get linkContact(): Locator {
    return this.page.getByTestId('link-contact');
  }

  get linkProfile(): Locator {
    return this.page.getByTestId('link-profile');
  }

  get banner(): Locator {
    return this.page.getByTestId('home-banner');
  }
}
