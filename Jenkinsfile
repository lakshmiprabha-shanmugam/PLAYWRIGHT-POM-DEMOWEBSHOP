// Jenkinsfile — Windows Jenkins
pipeline {
  agent any

  environment {
    BASE_URL = 'https://demowebshop.tricentis.com/'
    CI       = 'true'
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
        echo "Build: ${env.BUILD_NUMBER}"
      }
    }

    stage('Install Dependencies') {
      steps { bat 'npm ci' }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install --with-deps chromium'
        script {
          if (params.BROWSER == 'chrome' || params.BROWSER == 'all') {
            bat 'npx playwright install --with-deps chrome'
          }
          if (params.BROWSER == 'firefox' || params.BROWSER == 'all') {
            bat 'npx playwright install --with-deps firefox'
          }
        }
      }
    }

    stage('Run Playwright Tests') {
      steps {
        withCredentials([
          string(credentialsId: 'test-user-email',    variable: 'TEST_USER_EMAIL'),
          string(credentialsId: 'test-user-password', variable: 'TEST_USER_PASSWORD')
        ]) {
          script {
            def browser = params.BROWSER == 'all'
              ? ''
              : "--project=${params.BROWSER}"
            def suite = params.TEST_SUITE == 'smoke'
              ? '--grep @smoke'
              : params.TEST_SUITE == 'regression'
                ? ''
                : "tests/${params.TEST_SUITE}.spec.ts"
            bat "npx playwright test ${browser} ${suite}"
          }
        }
      }
    }

    stage('Generate Allure Report') {
      steps {
        bat 'npx allure generate allure-results --clean -o allure-report'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'results.xml'

      allure([
        includeProperties: false,
        jdk              : '',
        properties       : [],
        reportBuildPolicy: 'ALWAYS',
        results          : [[path: 'allure-results']]
      ])

      publishHTML([
        allowMissing         : true,
        alwaysLinkToLastBuild: true,
        keepAll              : true,
        reportDir            : 'playwright-report',
        reportFiles          : 'index.html',
        reportName           : 'Playwright Test Report'
      ])

      publishHTML([
        allowMissing         : true,
        alwaysLinkToLastBuild: true,
        keepAll              : true,
        reportDir            : 'allure-report',
        reportFiles          : 'index.html',
        reportName           : 'Allure Test Report'
      ])

      archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
    }
    success { echo 'All Playwright tests passed!' }
    failure { echo 'Tests failed — check the Playwright and Allure reports.' }
    cleanup { cleanWs() }
  }
}
