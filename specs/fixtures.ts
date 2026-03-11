import { test as base, APIRequestContext, request } from '@playwright/test';

type Fixtures = {
  apiContext: APIRequestContext;
};

export const test = base.extend<Fixtures>({
  apiContext: async ({}, use) => {
    const apiContext = await request.newContext({
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    });
    await use(apiContext);
    await apiContext.dispose();
  },
});

export { expect } from '@playwright/test';
