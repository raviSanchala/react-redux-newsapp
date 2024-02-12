pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests
                    sh 'npm run build'
                }
            }
        }
        stage('Build Production') {
            steps {
                script {
                    // Build production-ready bundle
                    sh 'gh-pages -d build'
                }
            }
        }
        stage('Deploy') {
            steps {
                 script {
                    // Build production-ready bundle
                    sh 'npm run build'
                }
                // Your deployment steps here, e.g., deploying to a web server
            }
        }
    }
}