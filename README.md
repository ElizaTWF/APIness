# APIness
Quote capture application

#Plan 
Install GitHub for Desktop
→ Add files from this Github repo
→ Upgrade dev apps in tech stack (node, express, mocha etc)

This is a very simple JS API with a basic front end that runs on http://localhost:3000
In order to run it:
Clone it to your local machine
In order for the shortcuts to work on windows, it will have to live in a C:\dev\apiness folder

#Outcome 
-> Appness API able to serve GET and POST requests
-> Front end for data entry 

#Install your runtime environment 
If on Windows, you can install Node from this link: https://nodejs.org/en/ 
This will launch a Windows MSI installer to place the application on your PC. 
Accept all the installer defaults. 
If you have applications like Visual Studio installed, you may be asked if you want to integrate with it. 
Say yes if you want to (although not strictly needed for this tutorial)


#Install GitHub Desktop for version control 
Go to: https://desktop.github.com/ 
The page should detect the version of GitHub you need
Download and install 


#Clone APIness repo from GitHub 
Clone following repo: https://github.com/ElizaTWF/APIness into C:\dev\apiness
Delete the package.json (we will recreate it later) 


#Clone from Git Bash / On the command line 
Open Git Bash 
>$ cd C: 
>$ cd DEV 
>$ git clone https://github.com/ElizaTWF/apiness.git 
>$ dir (to check the download) 
Delete the package.json (we will recreate it later) 


#Files in your app 
TBC

#Create a new package.json 
Open the command window.
Initialise the dev folder to create a new package.json: 
>$ npm init 

NPM will pick up the details of the application files installed into the folder and ask you to provide some details.
Change the following answers: 
Change the author to your name 
Regarding the URL - change the ElizaTWF to your GitHub name 
Click return to create the file 


#Update Node 
Install node.js updates into the BDDInt folder from the command line: 
>$ npm install node.js 


#Update Mocha 
Upgrade mocha in the BDDInt folder from the command line: 
>$ npm install mocha 


#Update expres 
Install cucumber into the BDDInt folder from the command line: 
>$ npm install cucumber 


#Verify PATH 
In a new cmd window, type PATH to verify the variable was saved. 
Cucumber will only run like this for the application path it is set to! 
You can only set it to one application instance at a time. 

#Run tests 
From the command line - 


#Run tests to fail 

#Ignore 
node_modules are ignored by git => You will have to install node to make this suite run
