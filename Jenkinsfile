// Jenkinsfile - Windows Jenkins
pipeline {
  agent any

  options {
    skipDefaultCheckout(true)
  }

  environment {
    BASE_URL = 'https://demowebshop.tricentis.com/'
    CI       = 'true'
  }

  parameters {
    choice(
      name        : 'BROWSER',
      choices     : ['chromium', 'chrome', 'both'],
      description : 'Browser to run tests on'
    )
    choice(
      name        : 'TEST_SUITE',
      choices     : ['smoke', 'regression', 'checkout', 'auth', 'accessibility'],
      description : 'Test suite to execute'
    )
  }

  stages {
    stage('Checkout') {
      steps {
        cleanWs()
        checkout scm
        echo "Build: ${env.BUILD_NUMBER}"
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        bat 'npx playwright install --with-deps chromium'
        script {
          if (params.BROWSER == 'chrome' || params.BROWSER == 'both') {
            bat 'npx playwright install --with-deps chrome'
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
            def browser = params.BROWSER == 'both'
              ? '--project=chromium --project=chrome'
              : "--project=${params.BROWSER}"
            def suite = params.TEST_SUITE == 'smoke'
              ? '--grep @smoke'
              : params.TEST_SUITE == 'accessibility'
                ? '--grep @accessibility'
                : params.TEST_SUITE == 'regression'
                  ? ''
                  : "tests/${params.TEST_SUITE}.spec.ts"

            catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
              bat "npx playwright test ${browser} ${suite}"
            }
          }
        }
      }
    }
  }

  post {
    always {
      script {
        if (fileExists('allure-results')) {
          bat 'npx allure generate allure-results --clean -o allure-report'
        } else {
          echo 'No allure-results directory found; skipping Allure HTML generation.'
        }
      }

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

      archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-report/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-results/**/*', allowEmptyArchive: true
      archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true

      echo "Playwright report: ${env.BUILD_URL}Playwright_20Test_20Report/"
      echo "Allure report: ${env.BUILD_URL}Allure_20Test_20Report/"
      echo "Archived artifacts: ${env.BUILD_URL}artifact/"
    }
    success {
      echo 'All Playwright tests passed.'
    }
    failure {
      echo 'Tests failed - check the Playwright and Allure reports.'
    }
    cleanup {
      cleanWs()
    }
  }
}
