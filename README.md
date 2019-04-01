# APIness
Quote capture application

You will need:
### Node JS installed globally on your development machine*
  #Install your NodeJS runtime environment 
  If on Windows, you can install Node from this link: https://nodejs.org/en/ 
  This will launch a Windows MSI installer to place the application on your PC. 
  Accept all the installer defaults. 
  If you have applications like Visual Studio installed, you may be asked if you want to integrate with it. 
  Say yes if you want to (although not strictly needed for this tutorial)

### Github Desktop installed on your development machine*
  #Install GitHub Desktop for version control 
  Go to: https://desktop.github.com/ 
  The page should detect the version of GitHub you need
  Download and install 
  
### A free MongoDB account.
  This is the database you will be saving all your API data into. 
  It will have to be  set up in advance which you will need the login, password and URL details for.
  Set up the account from here - https://www.mongodb.com/cloud/atlas

## Plan 

### Clone repo
  Once you have installed GitHub for Desktop
  → Add files from this Github repo
  Clone following repo: https://github.com/ElizaTWF/APIness into C:\dev\apiness
  Delete the package.json (we will recreate it later) 
  
  or 
  
  Clone from Git Bash / On the command line 
  Open Git Bash 
  >$ cd C: <br>
  >$ cd dev<br>
  >$ git clone https://github.com/ElizaTWF/apiness.git <br>
  >$ dir (to check the download) <br>
 <br>
 Delete the package.json (we will recreate it later) 

→ Upgrade dev apps in tech stack (node, express, mocha etc)
-> Commit upgrade to git

### Create a new package.json pointing at your git repo
  Open the command prompt in the repo
  Type: npm init
  NPM will pick up the details of the application files installed into the folder and ask you to provide some details.
  Change the following answers: 
  Change the author to your name 
  Regarding the URL - change the ElizaTWF to your GitHub name 
  Click return to create the file 
  When the prompts apprear, ensure that you point the git repo at your git repo.

OR for those that like to do things for themselves, you can build the APIs yourself using the code and instructions from here: 
https://drive.google.com/open?id=1DoEtDIBq4cNwWA_hz1jHUPNyDANZ5tq0

### Upgrade the apps in your dev environment:
From the command prompt in your apiness folder:
npm install
npm install node
npm install express
npm install ejs
npm install nodemon
npm install body-parser
npm install mongo-db

### What you get
A very simple JS API with a basic front end that runs on http://localhost:3000
-> Appness API able to serve GET and POST requests
-> Front end for data entry 


### Files in your app 
TBC


### Run tests 
From the command line - 


### Run tests to fail 

#### Ignore 
node_modules are ignored by git => You will have to install node to make this suite run
