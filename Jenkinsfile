pipeline {
    agent any
    tools {
        nodejs 'Node16' // Name from Global Tool Configuration
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Sanskruti2209/nodejs-webapp-assignment5.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                bat 'npm install http-server --save-dev'
                echo 'Build completed (no additional build step needed for this simple app)'
            }
        }
        stage('Deploy') {
            steps {
                bat '''
                    if not exist dist mkdir dist
                    copy app.js dist/
                    start /B "" cmd /c "npx http-server dist -p 3000 > deploy.log 2>&1"
                    ping 127.0.0.1 -n 3 >nul
                    netstat -aon | findstr :3000 || (echo ERROR: Port 3000 not in use! & exit /b 1)
                    echo Server started on port 3000
                '''
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully! App running at http://localhost:3000'
        }
        failure {
            echo 'Pipeline failed. Check console output for details.'
        }
    }
}