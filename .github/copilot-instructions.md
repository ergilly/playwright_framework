# Project Guidelines

## Architecture
- This repository is a Playwright + TypeScript test framework with two test surfaces:
  - UI tests in `specs/ui/**` (browser automation against `BASE_URL`, default `http://localhost:3001`).
  - API tests in `specs/api/**` (request testing against `API_BASE_URL`, default `http://localhost:3000`).
- Keep UI and API concerns separate. Do not mix API assertions into UI specs unless explicitly needed.
- Use the existing Page Object Model under `pages/`:
  - One folder per page (PascalCase), e.g. `pages/HomePage/`.
  - Keep `index.ts` (page class), `pageElements.ts` (locators), and `pageActions.ts` (interactions).
- Shared cross-page behavior belongs in `pages/Shared/`.
- Reuse custom fixtures from `specs/fixtures.ts` and import `test`/`expect` from there in specs.

## Build And Test
- Install dependencies: `npm install`
- Start local target apps for tests:
  - API server: `npm run launch:api-server`
  - UI server: `npm run launch:ui-server`
  - Both: `npm run launch:servers`
- Run tests:
  - All tests: `npm test`
  - API only: `npm run test:api`
  - UI only (Chromium): `npm run test:ui`
  - Headed mode: `npm run test:headed`
  - HTML report: `npm run test:report`
- Quality checks:
  - Lint: `npm run lint`
  - Lint fix: `npm run lint:fix`
  - Format: `npm run format`
  - Format check: `npm run format:check`

## Conventions
- Prefer strict TypeScript-compatible edits; `tsconfig.json` has `strict: true`.
- Keep selectors stable and test-focused:
  - Prefer `getByTestId` for app-specific elements.
  - Use semantic queries like `getByRole` where appropriate.
- Keep naming patterns consistent:
  - Page folders and classes: PascalCase (e.g. `LoginPage`).
  - Action/element properties and methods: camelCase.
  - Spec files: `*.spec.ts` under `specs/ui` or `specs/api`.
- Reuse fixture and data modules:
  - UI test data in `data/ui/*.ts`.
  - API request/response fixtures in `data/api/**` JSON.
- For API tests, build unique test entities when needed (for example unique emails) to avoid collisions.

## Environment Notes
- `.env` controls `BASE_URL` and `API_BASE_URL`; Playwright config provides localhost defaults.
- `npm run launch:servers` depends on `@ergilly/react-test-app` and `@ergilly/test-api-server` executables.
- Prettier enforces LF (`.prettierrc` uses `endOfLine: "lf"`). On Windows, avoid introducing CRLF-only formatting changes.
- In CI, retries/workers/forbidOnly behavior differs via `playwright.config.ts`; keep this behavior intact unless explicitly requested.
