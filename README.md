# Playwright POM Demo Web Shop

End-to-end test automation framework for the Tricentis Demo Web Shop application using Playwright, TypeScript, and the Page Object Model pattern.

## Tech Stack

- Playwright Test
- TypeScript
- Page Object Model
- Allure reporting
- JUnit reporting
- Axe accessibility checks
- GitHub Actions and Jenkins CI support

## Project Structure

```text
.
|-- pages/                         # Page Object Model classes
|-- tests/                         # Playwright test specs
|   |-- config/testConfig.ts        # Base URL, users, and test config helpers
|-- testData/                      # Data-driven test files
|-- scripts/                       # Reporting and test helper scripts
|-- .github/workflows/             # GitHub Actions workflows
|-- playwright.config.ts           # Playwright configuration
|-- Jenkinsfile                    # Jenkins pipeline
|-- TEST_COVERAGE.md               # Scenario coverage matrix
|-- package.json                   # NPM scripts and dependencies
```

## Prerequisites

- Node.js 18 or later
- npm
- Chrome or Chromium browser support through Playwright

## Setup

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

For CI-like Linux environments, install browser system dependencies too:

```bash
npx playwright install --with-deps chromium
```

## Configuration

The default application URL is:

```text
https://demowebshop.tricentis.com/
```

You can override runtime values with environment variables:

| Variable | Purpose | Default |
| --- | --- | --- |
| `BASE_URL` | Target application URL | `https://demowebshop.tricentis.com/` |
| `TEST_USER_EMAIL` | Existing user email for tests that need credentials | `testuser@demo.test` |
| `TEST_USER_PASSWORD` | Existing user password | `Tosca1234!` |
| `CI` | Enables CI behavior such as retries and stricter checks | unset locally |

PowerShell example:

```powershell
$env:BASE_URL = "https://demowebshop.tricentis.com/"
$env:TEST_USER_EMAIL = "your-user@example.com"
$env:TEST_USER_PASSWORD = "your-password"
```

## Running Tests

Run the full test suite:

```bash
npm test
```

Run selected suites:

```bash
npm run test:login
npm run test:register
npm run test:smoke
npm run test:a11y
```

Run tests for one browser project:

```bash
npx playwright test --project=chromium
npx playwright test --project=chrome
```

Run a specific spec file:

```bash
npx playwright test tests/checkout.spec.ts
```

Run tests by tag:

```bash
npx playwright test --grep "@smoke"
npx playwright test --grep "@accessibility"
```

## Reports

This project is configured to generate:

- Playwright HTML report in `playwright-report/`
- Allure results in `allure-results/`
- Allure HTML report in `allure-report/`
- JUnit XML report in `results.xml`
- Failure artifacts in `test-results/`

Run tests and generate Allure output:

```bash
npm run test:allure
```

Generate Allure report from existing results:

```bash
npm run allure:generate
```

Open the generated Allure report:

```bash
npm run allure:open
```

Serve raw Allure results:

```bash
npm run allure:serve
```

Open the Playwright HTML report:

```bash
npx playwright show-report playwright-report
```

## Accessibility Testing

Accessibility tests use `@axe-core/playwright` and block on critical or serious WCAG 2 A/AA violations. Detailed violation JSON files are attached to the Playwright report.

Run accessibility tests:

```bash
npm run test:a11y
```

Run accessibility tests with Allure reporting:

```bash
npm run test:a11y:allure
```

## Docker

### Overview

The project includes a `Dockerfile` and `docker-compose.yml` so tests can run inside a container without installing Node.js or Playwright browsers locally.

### Prerequisites

- Docker Desktop installed and running

### Build and Run with Docker Compose (Recommended)

Build the image and run tests in one command:

```powershell
docker compose up --build
```

To rebuild from scratch (force a fresh image):

```powershell
docker compose down --rmi local
docker compose up --build
```

### Run with Plain Docker

Build the image manually:

```powershell
docker build -t playwright-pom-demowebshop-playwright-tests .
```

Run the container:

```powershell
docker run --rm `
  -e CI=true `
  -e BASE_URL=https://demowebshop.tricentis.com/ `
  -v "${PWD}/allure-results:/app/allure-results" `
  -v "${PWD}/test-results:/app/test-results" `
  -v "${PWD}/playwright-report:/app/playwright-report" `
  playwright-pom-demowebshop-playwright-tests
```

### Viewing Reports After a Run

The following folders are mounted as volumes and populated on your host machine after the container finishes:

- `allure-results/` — raw Allure data
- `test-results/` — Playwright failure artifacts
- `playwright-report/` — Playwright HTML report

Open the Playwright HTML report:

```powershell
npx playwright show-report
```

### Running Specific Services

The `docker-compose.yml` defines two services:

| Service | Command | Output folders |
|---|---|---|
| `playwright-tests` | `npm test` (full suite) | `allure-results/`, `playwright-report/` |
| `accessibility-tests` | `npm run test:a11y` | `allure-results/accessibility/`, `playwright-report/accessibility/` |

Run only accessibility tests:

```powershell
docker compose up --build accessibility-tests
```

Run only the main test suite:

```powershell
docker compose up --build playwright-tests
```

Run both at the same time:

```powershell
docker compose up --build
```

Each service writes to its own separate output folders so reports never conflict.

### Troubleshooting

**`docker pull` fails with "repository does not exist"**

This image is built locally and is not hosted on Docker Hub. Do not use `docker pull`. Use `docker compose up --build` instead.

**`docker rmi` fails with "container is using its referenced image"**

A container using the image is still running. Stop and remove it first:

```powershell
docker rm -f <container-id>
docker rmi playwright-pom-demowebshop-playwright-tests
```

Or use Docker Compose to tear everything down cleanly:

```powershell
docker compose down --rmi local
```

### Push Image to Docker Hub

To share the image so others can pull it:

```powershell
docker tag playwright-pom-demowebshop-playwright-tests <your-dockerhub-username>/playwright-pom-demowebshop-playwright-tests
docker login
docker push <your-dockerhub-username>/playwright-pom-demowebshop-playwright-tests
```

## CI/CD

### GitHub Actions

The repository includes workflows for:

- Pull request and push smoke tests: `.github/workflows/playwright.yml`
- Nightly full regression: `.github/workflows/playwright-nightly.yml`
- Accessibility checks: `.github/workflows/accessibility.yml`

GitHub Actions expects these secrets when credentials are required:

- `BASE_URL`
- `TEST_USER_EMAIL`
- `TEST_USER_PASSWORD`

### Jenkins

The `Jenkinsfile` defines a Windows Jenkins pipeline with browser and suite parameters:

- `BROWSER`: `chromium`, `chrome`, or `both`
- `TEST_SUITE`: `smoke`, `regression`, `checkout`, `auth`, or `accessibility`

It publishes Playwright, Allure, JUnit, and test result artifacts after each run.

## Test Data

Data-driven registration tests use JSON, CSV, and Excel data sources from:

- `registrationData.json`
- `registrationData.csv`
- `testData/registrationData.json`
- `testData/registrationData.csv`
- `testData/registrationData.xlsx`

## Test Coverage

Coverage is tracked in `TEST_COVERAGE.md` and the text mapping file `Automation Test Case Mapping Table.txt`.

The suite includes positive, negative, boundary, and edge-case scenarios across registration, authentication, homepage navigation, search, cart, wishlist, checkout, and accessibility.

## Development Notes

- Page objects live in `pages/` and should contain reusable locators and page actions. Shared product actions are handled by `ProductPage`.
- Test specs live in `tests/` and should keep assertions close to the user workflow being tested.
- Shared runtime configuration belongs in `tests/config/testConfig.ts`.
- Generated folders such as `playwright-report/`, `allure-report/`, `allure-results/`, and `test-results/` should not be committed.
