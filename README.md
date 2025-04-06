Google Login App(MERN Stack)
1.Google Console Setup
2.Frontend
3.Backend
4.DB Setup

=>1.Google Console Setup

1.go to google cloud console
   =>https://console.cloud.google.com
   =>Select Project and Create New Project
   =>We can also add myproject name or automatically generated name
   =>Click on Create
   =>Select the project and go to APIs & Services 
   =>Click on OAuth consent screen
   =>click getStarted
   =>App Information => Fill the form with your app name and email address
   =>OAuth overview => Create oauth client =>Create OAuth client ID 
   =>Authorised JavaScript origins => http://localhost:5173 like we can add domain when we deploy the app
   =>click on create and Download the JSON file => in which we can see the creadiantial information

=>2.Frontend
   =>npm create vite@latest frontEnd
   => npm i @react-oauth/google axios react-router-dom
   



 =>3.Backend
   =>npm init -y
   => npm i axios express cors dotenv googleapi jsonwebtoken mongoose