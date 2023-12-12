# Instructions for running the application

## 1. Requirements
- Install NPM and [Node.js](https://nodejs.org/en/download/current) as administrator.
- Install [Xampp](https://www.apachefriends.org/download.html) as administrator.
- Command Line or Text Editor ([VSCode](https://code.visualstudio.com/docs/setup/windows) and [Git](https://git-scm.com/downloads) used for the project.)
- (Optional) Install MySql Workbench to view local database [here](https://dev.mysql.com/downloads/workbench/).

## 2. Clone the application and storing it locally
- Launch git bash
- Navigate to directory of your choosing (Using commands "cd <FolderName>" and "cd .." to go up a directory)
- copy this command ( git clone "https://github.com/mesudc/CSI4650.git" ) make sure the link is in quotations
- Reference image below:

 ![Image of the git bash running the code listed above](https://i.imgur.com/RlzeZ7A.png)

## 3. Starting the application
- Launch Xampp
- Launch the two services underlined in red ![image of Xampp control panel showing apache and mysql services running](https://imgur.com/eGoPoaL.png)
- Launch command line
- Verify Node.js (node --version) and npm (npm --version) is installed
- Navigate to the cloned repository location in your pc (Location that you chose when you during Step 2.
- Run the command "npm install"
- Once installation is complete, run the command "npm start"
- On your browser, navigate to the local website on port 127.0.0.1:3000 or localhost:3000

## (Optional) 4. Viewing the database table in mysql workbench 
- Launch MySql Workbench
- In MySQL Connections, press the plus sign to add a connection
- Connection Name : <any>
- Hostname : 127.0.0.1
- Username : root
- Click OK
- Double click on the new connection to start the connection
- Click "Continue anyways"
- Under database "mydb" > "tables" > "poll" > click the table icon to execute the mysql query "SELECT * FROM mydb.poll;" (Or do so manually)
  ![image of mysql workbench highlighting how to execute a query to view poll table](https://i.imgur.com/ZOStarl.png)
