const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const resultsDirectory = 'allure-results';
const reportDirectory = 'allure-report';
const isWindows = process.platform === 'win32';
const npxCmd = isWindows ? 'npx.cmd' : 'npx';

function findResultFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        return findResultFiles(entryPath);
      }
      return entry.name.endsWith('-result.json') ? [entryPath] : [];
    });
}

const resultFiles = findResultFiles(resultsDirectory);

if (resultFiles.length === 0) {
  console.error(`No Allure test result files found in "${resultsDirectory}".`);
  console.error('Run Playwright first, for example: npm run test:smoke');
  console.error('If you downloaded results from GitHub Actions, extract that artifact and serve that exact folder.');
  process.exit(1);
}

const reportRun = spawnSync(
  npxCmd,
  ['allure', 'generate', resultsDirectory, '--clean', '-o', reportDirectory],
  {
    stdio: 'inherit',
    shell: isWindows,
  }
);

if (reportRun.error) {
  console.error(`Failed to run Allure: ${reportRun.error.message}`);
}

process.exit(reportRun.status ?? 1);
