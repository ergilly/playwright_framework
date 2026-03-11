import { type Locator, type Page } from '@playwright/test';
import SharedElements from '../Shared/sharedElements';

export default class AboutPageElements extends SharedElements {
  constructor(page: Page) {
    super(page);
  }

  get pageContainer(): Locator {
    return this.page.getByTestId('about-page');
  }

  get title(): Locator {
    return this.page.getByTestId('about-title');
  }

  get featuresSection(): Locator {
    return this.page.getByTestId('about-features');
  }

  get techSection(): Locator {
    return this.page.getByTestId('about-tech');
  }

  get purposeSection(): Locator {
    return this.page.getByTestId('about-purpose');
  }

  get featureAuthentication(): Locator {
    return this.page.getByTestId('feature-authentication');
  }

  get featureRouting(): Locator {
    return this.page.getByTestId('feature-routing');
  }

  get featureForms(): Locator {
    return this.page.getByTestId('feature-forms');
  }

  get featureTestIds(): Locator {
    return this.page.getByTestId('feature-test-ids');
  }

  get featureAccessibility(): Locator {
    return this.page.getByTestId('feature-accessibility');
  }

  get featureResponsive(): Locator {
    return this.page.getByTestId('feature-responsive');
  }
}
