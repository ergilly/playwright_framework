import { type Locator, type Page } from '@playwright/test';

export default class SharedElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get header(): Locator {
    return this.page.getByRole('banner');
  }

  get main(): Locator {
    return this.page.getByRole('main');
  }

  get footer(): Locator {
    return this.page.getByRole('contentinfo');
  }

  get navBrand(): Locator {
    return this.page.getByTestId('nav-brand');
  }

  get navHome(): Locator {
    return this.page.getByTestId('nav-home');
  }

  get navAbout(): Locator {
    return this.page.getByTestId('nav-about');
  }

  get navContact(): Locator {
    return this.page.getByTestId('nav-contact');
  }

  get navProfile(): Locator {
    return this.page.getByTestId('nav-profile');
  }

  get navUsername(): Locator {
    return this.page.getByTestId('nav-username');
  }

  get logoutButton(): Locator {
    return this.page.getByTestId('btn-logout');
  }
}
