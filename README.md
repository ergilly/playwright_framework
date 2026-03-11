# Playwright Test Framework Boilerplate

A production-ready Playwright + TypeScript boilerplate for UI and API testing.

This project includes sample tests that run against two sample applications installed as npm packages:

- UI app: `@ergilly/react-test-app` (default `http://localhost:3001`)
- API app: `@ergilly/test-api-server` (default `http://localhost:3000`)

Use this repository as a starting point for your own end-to-end and API automation framework.

## What You Get

- TypeScript-based Playwright framework with strict typing.
- Separate UI and API test surfaces in one project.
- Page Object Model (POM) structure for maintainable UI tests.
- Shared custom fixtures for page objects and API request context.
- Test data and request payloads separated from spec files.
- ESLint + Prettier setup for consistent code quality.
- Multi-browser UI testing (`chromium`, `firefox`, `webkit`).
- HTML report output via Playwright.

## Project Structure

```text
playwright_framework/
	data/
		api/
			request/
			response/
		ui/
	pages/
		AboutPage/
		ContactPage/
		HomePage/
		LoginPage/
		ProfilePage/
		Shared/
		index.ts
	specs/
		api/
			users.spec.ts
		ui/
			*.spec.ts
		fixtures.ts
	playwright.config.ts
	package.json
```

## Prerequisites

- Node.js 18+ recommended
- npm 9+ recommended

## Installation

```bash
npm install
```

Install Playwright browser binaries (at least once on a machine):

```bash
npx playwright install
```

## Environment Configuration

The framework reads these environment variables:

- `BASE_URL` for UI tests (default `http://localhost:3001`)
- `API_BASE_URL` for API tests (default `http://localhost:3000`)

Example `.env`:

```env
BASE_URL=http://localhost:3001
API_BASE_URL=http://localhost:3000
```

If `.env` is not set, Playwright falls back to the defaults defined in `playwright.config.ts`.

## Running Sample Applications

To run tests against the sample apps, start the packaged servers first:

```bash
npm run launch:servers
```

Or launch only one surface:

```bash
npm run launch:api-server
npm run launch:ui-server
```

## Running Tests

Run all tests (UI + API):

```bash
npm test
```

Run only API tests:

```bash
npm run test:api
```

Run only UI tests (Chromium project):

```bash
npm run test:ui
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open the latest HTML report:

```bash
npm run test:report
```

## Available Scripts

- `npm test`: run all Playwright projects
- `npm run test:ui`: run UI tests on Chromium
- `npm run test:api`: run API tests only
- `npm run test:headed`: run tests with visible browser
- `npm run test:report`: open Playwright HTML report
- `npm run lint`: run ESLint
- `npm run lint:fix`: run ESLint and auto-fix issues
- `npm run format`: run Prettier write mode
- `npm run format:check`: run Prettier check mode
- `npm run launch:api-server`: start sample API app on port 3000
- `npm run launch:ui-server`: start sample UI app on port 3001
- `npm run launch:servers`: start both sample apps concurrently

## Framework Architecture

### 1) Playwright Projects

Projects are configured in `playwright.config.ts`:

- `api`: runs specs under `specs/api/**/*.spec.ts`
- `chromium`, `firefox`, `webkit`: run specs under `specs/ui/**/*.spec.ts`

This allows one test framework to support API and multi-browser UI validation.

### 2) Fixtures

Custom fixtures are defined in `specs/fixtures.ts` and exported as:

- `test`
- `expect`

Fixtures provide:

- Page object instances (`homePage`, `loginPage`, `profilePage`, etc.)
- `apiContext` (`APIRequestContext`) with `API_BASE_URL`

Use them in specs:

```ts
import { test, expect } from '../fixtures';
```

### 3) Page Object Model (POM)

Each page follows this pattern:

- `index.ts`: page class wiring `elements` and `actions`
- `pageElements.ts`: all locators/getters
- `pageActions.ts`: reusable interactions/business actions

Common behavior is shared under `pages/Shared/`.

## Sample Test Coverage

The included sample tests demonstrate common patterns.

UI samples (`specs/ui`):

- Page rendering and content assertions
- Navigation flows
- Login success/failure scenarios
- Profile data and activity panel checks

API samples (`specs/api/users.spec.ts`):

- Health check endpoint validation
- CRUD endpoint checks for `/users`
- Error-path assertions (`400`, `401`, `404`, `500`)
- Unique test entity creation to avoid data collisions

## How To Add New Tests

### Add a new UI page object

1. Create a folder in `pages/` (for example `SettingsPage/`).
2. Add `index.ts`, `pageElements.ts`, `pageActions.ts`.
3. Export it from `pages/index.ts` if needed.
4. Register fixture in `specs/fixtures.ts`.
5. Add spec in `specs/ui/settings.spec.ts`.

### Add a new API spec

1. Add request/response data files under `data/api` as needed.
2. Create a spec under `specs/api`.
3. Use `apiContext` fixture for calls.
4. Keep reusable payload builders inside the spec or a helper module.

## Recommended Conventions

- Keep selectors stable and test-focused:
	- Prefer `getByTestId` for app-owned elements.
	- Use semantic locators (`getByRole`, etc.) where appropriate.
- Keep page classes focused:
	- `pageElements.ts` for locators only.
	- `pageActions.ts` for user/workflow actions.
- Keep test data in `data/` instead of hardcoding in specs.
- For API create/update flows, generate unique values (for example timestamped emails).

## Quality Checks

Run lint and format checks before pushing changes:

```bash
npm run lint
npm run format:check
```

## Troubleshooting

- `launch:servers` fails:
	- Ensure dependencies are installed (`npm install`).
	- Ensure ports `3000` and `3001` are free.
- Browser launch errors:
	- Reinstall Playwright browsers with `npx playwright install`.
- API tests failing with connection errors:
	- Verify API server is running and `API_BASE_URL` matches.
- UI tests failing at navigation:
	- Verify UI server is running and `BASE_URL` matches.

## CI Notes

The Playwright config already includes CI-aware behavior:

- `forbidOnly` enabled in CI
- retries set to `2` in CI
- workers set to `1` in CI

This makes local runs faster while keeping CI stricter and more stable.

## Next Customization Ideas

- Add auth/session bootstrap in Playwright `storageState`.
- Add API helper clients for common endpoints.
- Add tags/grep strategy for smoke vs regression suites.
- Add GitHub Actions workflow for lint + tests + report artifacts.
