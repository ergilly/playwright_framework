import { test as base, APIRequestContext, request } from '@playwright/test';
import HomePage from '../pages/HomePage/index';
import LoginPage from '../pages/LoginPage/index';
import AboutPage from '../pages/AboutPage/index';
import ContactPage from '../pages/ContactPage/index';
import ProfilePage from '../pages/ProfilePage/index';

type Fixtures = {
  apiContext: APIRequestContext;
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
  },
  apiContext: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    });
    await use(apiContext);
    await apiContext.dispose();
  },
});

export { expect } from '@playwright/test';
