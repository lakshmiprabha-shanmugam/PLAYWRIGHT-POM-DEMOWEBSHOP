// Jenkinsfile — place in repository root
pipeline {
  agent any

  tools {
    nodejs 'NodeJS-18'    // Must match name in Global Tool Configuration
  }

  environment {
    BASE_URL           = 'https://demowebshop.tricentis.com/'
    TEST_USER_EMAIL    = credentials('test-user-email')
    TEST_USER_PASSWORD = credentials('test-user-password')
    CI                 = 'true'
  }

  parameters {
    choice(
      name        : 'BROWSER',
      choices     : ['chromium', 'chrome', 'firefox', 'all'],
      description : 'Browser to run tests on'
    )
    choice(
      name        : 'TEST_SUITE',
      choices     : ['smoke', 'regression', 'checkout', 'auth'],
      description : 'Test suite to execute'
    )
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
        echo "Branch: ${env.BRANCH_NAME} | Build: ${env.BUILD_NUMBER}"
      }
    }

    stage('Install Dependencies') {
      steps { sh 'npm ci' }
    }

    stage('Install Playwright Browsers') {
      steps {
        sh 'npx playwright install --with-deps chromium'
        script {
          if (params.BROWSER == 'chrome' || params.BROWSER == 'all') {
            sh 'npx playwright install --with-deps chrome'
          }
          if (params.BROWSER == 'firefox' || params.BROWSER == 'all') {
            sh 'npx playwright install --with-deps firefox'
          }
        }
      }
    }

    stage('Run Playwright Tests') {
      steps {
        script {
          def browser = params.BROWSER == 'all'
            ? ''
            : "--project=${params.BROWSER}"
          def suite = params.TEST_SUITE == 'smoke'
            ? '--grep @smoke'
            : params.TEST_SUITE == 'regression'
              ? ''
              : "tests/${params.TEST_SUITE}.spec.ts"
          sh "npx playwright test ${browser} ${suite}"
        }
      }
    }

    stage('Generate Allure Report') {
      steps {
        sh 'npx allure generate allure-results --clean -o allure-report'
      }
    }
  }

  post {
    always {

      // JUnit XML — populates Jenkins test trend charts
      junit 'results.xml'

      // Allure Report — interactive test report in Jenkins UI
      allure([
        includeProperties: false,
        jdk              : '',
        properties       : [],
        reportBuildPolicy: 'ALWAYS',
        results          : [[path: 'allure-results']]
      ])

      // HTML Publisher — Playwright report inline in Jenkins UI
      publishHTML([
        allowMissing         : false,
        alwaysLinkToLastBuild: true,
        keepAll              : true,
        reportDir            : 'playwright-report',
        reportFiles          : 'index.html',
        reportName           : 'Playwright Test Report'
      ])

      // HTML Publisher — Allure report as static HTML fallback
      publishHTML([
        allowMissing         : false,
        alwaysLinkToLastBuild: true,
        keepAll              : true,
        reportDir            : 'allure-report',
        reportFiles          : 'index.html',
        reportName           : 'Allure Test Report'
      ])

      // Archive screenshots and traces for debugging
      archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true

      // Archive Allure results for history tracking across builds
      archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
    }
    success { echo 'All Playwright tests passed!' }
    failure { echo 'Tests failed — check the Playwright and Allure reports.' }
    cleanup { cleanWs() }    // Clean workspace after every build
  }
}
