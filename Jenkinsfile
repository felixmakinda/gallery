pipeline {
  agent any
  //Require Node.js as a dependency
  tools {
    nodejs "nodejs"
  }
  stages {
    stage('Initialize Git Repository') {
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
    stage('Run Tests') {
       steps {
         sh '''
         npm test
         '''
         }
   }
    stage('Deploy to Render') {
      steps {
        sh '''
        curl -X POST https://api.render.com/deploy/srv-coj98jqcn0vc73dr3ft0?key=7jvGt4MJwZo
          '''
      }
    }
    stage ('Send Slack Message'){
      steps {
          slackSend(
            color: '#439FE0',
            message: "Deployment successful! Build ID: ${env.BUILD_ID} - Render Link: https://gallery-y0g5.onrender.com", //Render Deployment Link
            channel: '#felix_ip1', // Relevant Slack Channel
            teamDomain: 'felixlearns', // Slack Team Subdomain
            tokenCredentialId: 'uSLrqWFzlln97KyGtrFuK0pM' // Slack Integration Token Credential ID
          )
      }
    }
  }
}