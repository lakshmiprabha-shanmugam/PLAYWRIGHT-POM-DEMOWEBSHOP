class AsciiReporter {
  onBegin(config, suite) {
    this.total = suite.allTests().length;
    this.passed = 0;
    this.failed = 0;
    this.skipped = 0;
    console.log(`Running ${this.total} Playwright tests`);
  }

  onTestEnd(test, result) {
    if (result.status === 'passed') {
      this.passed += 1;
      console.log(`PASS ${test.titlePath().slice(1).join(' > ')}`);
      return;
    }

    if (result.status === 'skipped') {
      this.skipped += 1;
      console.log(`SKIP ${test.titlePath().slice(1).join(' > ')}`);
      return;
    }

    this.failed += 1;
    console.log(`FAIL ${test.titlePath().slice(1).join(' > ')}`);
    for (const error of result.errors) {
      if (error.message) {
        console.log(error.message.replace(/\u001b\[[0-9;]*m/g, ''));
      }
    }
  }

  onEnd(result) {
    console.log(
      `Playwright finished: ${result.status}. Passed: ${this.passed}, Failed: ${this.failed}, Skipped: ${this.skipped}`
    );
  }
}

module.exports = AsciiReporter;
