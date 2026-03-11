import { type Locator, type Page } from '@playwright/test';
import SharedElements from '../Shared/sharedElements';

export default class ProfilePageElements extends SharedElements {
  constructor(page: Page) {
    super(page);
  }

  get pageContainer(): Locator {
    return this.page.getByTestId('profile-page');
  }

  get title(): Locator {
    return this.page.getByTestId('profile-title');
  }

  get avatarCard(): Locator {
    return this.page.getByTestId('profile-avatar-card');
  }

  get avatar(): Locator {
    return this.page.getByTestId('profile-avatar');
  }

  get displayName(): Locator {
    return this.page.getByTestId('profile-display-name');
  }

  get roleBadge(): Locator {
    return this.page.getByTestId('profile-role-badge');
  }

  get detailsCard(): Locator {
    return this.page.getByTestId('profile-details');
  }

  get fullName(): Locator {
    return this.page.getByTestId('profile-name');
  }

  get username(): Locator {
    return this.page.getByTestId('profile-username');
  }

  get email(): Locator {
    return this.page.getByTestId('profile-email');
  }

  get role(): Locator {
    return this.page.getByTestId('profile-role');
  }

  get activityPanel(): Locator {
    return this.page.getByTestId('profile-activity');
  }

  get activityLogin(): Locator {
    return this.page.getByTestId('activity-login');
  }

  get activityProfileView(): Locator {
    return this.page.getByTestId('activity-profile-view');
  }

  get activityPlaceholder(): Locator {
    return this.page.getByTestId('activity-placeholder');
  }
}
