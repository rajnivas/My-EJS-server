pipeline {
    agent {
        docker { image 'node:7-alpine' }}
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
