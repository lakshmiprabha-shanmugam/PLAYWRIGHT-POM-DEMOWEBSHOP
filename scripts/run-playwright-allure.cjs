const { spawnSync } = require('node:child_process');
const fs = require('node:fs');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';
const npxCmd = isWindows ? 'npx.cmd' : 'npx';
const testArgs = process.argv.slice(2);

function run(command, args) {
  return spawnSync(command, args, {
    stdio: 'inherit',
    shell: false,
  });
}

for (const directory of ['allure-results', 'allure-report']) {
  fs.rmSync(directory, { recursive: true, force: true });
}

const testRun = run(npxCmd, ['playwright', 'test', ...testArgs]);
const testExitCode = testRun.status ?? 1;

const reportRun = run(npmCmd, ['run', 'allure:generate']);
const reportExitCode = reportRun.status ?? 1;

process.exit(testExitCode || reportExitCode);
