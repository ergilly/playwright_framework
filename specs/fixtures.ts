import { test as base } from '@playwright/test';
import HomePage from '../pages/HomePage/';
import LoginPage from '../pages/LoginPage/';
import AboutPage from '../pages/AboutPage/';
import ContactPage from '../pages/ContactPage/';
import ProfilePage from '../pages/ProfilePage/';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  aboutPage: AboutPage;
  contactPage: ContactPage;
  profilePage: ProfilePage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  aboutPage: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await use(aboutPage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  profilePage: async ({ page }, use) => {
    const profilePage = new ProfilePage(page);
    await use(profilePage);
  }
});

export { expect } from '@playwright/test';
