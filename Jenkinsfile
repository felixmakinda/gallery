pipeline {
  agent any
  //Require Node.js as a dependency
  tools {
    nodejs "nodejs"
  }
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/felixmakinda/gallery.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh '''
        npm install
          '''
      }
    }

    stage('Deploy to Render') {
      steps {
        sh '''
        curl - X POST https: //api.render.com/deploy/srv-coiofjgl5elc73db5hv0?key=3maJllHP68U
          '''
      }
    }
  }
}