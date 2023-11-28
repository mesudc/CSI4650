const mysql = require('mysql2');
// create a new MySQL connection

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

//Create database if not exists 'mydb'
//Uncomment to create database locally on your machine
//dbCreate(); 

function dbCreate(){
    con.query('CREATE DATABASE IF NOT EXISTS mydb', (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Database created successfully!');
        }
        }
    );
}


//Create table if not exists 'polls' with Id, name, age, university, major, gpa
//Uncomment function below function to create table
// createTable();
function createTable() {
    con.query('CREATE TABLE IF NOT EXISTS mydb.polls (Id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, surname VARCHAR(255) NOT NULL, age INT NOT NULL, university VARCHAR(255) NOT NULL, major VARCHAR(255) NOT NULL, gpa FLOAT NOT NULL, PRIMARY KEY (Id))', (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Table created successfully!');
        }
        }
    );
}

//Connect to database 'mydb'
function Connect(){
    con.connect((error) => {
        if (error) {
        console.error('Error connecting to MySQL database:', error);
        } else {
        console.log('Connected to MySQL database!');
        }
    });
}

//Inserts data into table 'polls'
//dbInsert('John', 'Doe', 20, 'University of Toronto', 'Computer Science', 3.5)


function dbInsert(name, surname, age, university, major, gpa) {
    
    const sql = `INSERT INTO mydb.polls (name, surname, age, university, major, gpa) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [name, surname, age, university, major, gpa];

    con.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Data to be inserted: ', values);
            console.log('Data inserted successfully!');
        }
    });
}

//Get total number of rows in table 'polls'
async function dbGetTotal() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT COUNT(*) AS total_rows FROM mydb.polls`;

        con.query(sql, (error, results) => {
            if(error){
                console.error(error);
                reject(error);
            } else {
                console.log('Total rows:', results[0].total_rows);
                resolve(results);
            }   
        });
    });
}



//Selects data from table 'polls'
//Returns the average of each column in the 'polls' table
function dbGetAverages() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT AVG(age) AS avg_age, AVG(gpa) AS avg_gpa FROM mydb.polls`;

        con.query(sql, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log('Average age:', results[0].avg_age);
                console.log('Average GPA:', results[0].avg_gpa);
                resolve(results);
            }
        });
    });
}


function dbGetAll() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM mydb.polls`;

        con.query(sql, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log('Average age:', results[0].avg_age);
                console.log('Average GPA:', results[0].avg_gpa);
                resolve(results);
            }
        });
    });
}

function dbGetUni() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT university, COUNT(DISTINCT Id) AS uni FROM mydb.polls GROUP BY university ORDER BY uni DESC`;

        con.query(sql, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log('Average age:', results[0].avg_age);
                console.log('Average GPA:', results[0].avg_gpa);
                resolve(results);
            }
        });
    });
}

function dbGetMajor() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT major, COUNT(DISTINCT Id) AS maj FROM mydb.polls GROUP BY major ORDER BY maj DESC`;

        con.query(sql, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log('Average age:', results[0].avg_age);
                console.log('Average GPA:', results[0].avg_gpa);
                resolve(results);
            }
        });
    });
}

//Removes data from table 'polls' with Id
function dbRemove(id) {
    const sql = `DELETE FROM mydb.polls WHERE Id = ?`;
    const values = [id];

    con.query(sql, values, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Data to be removed: ', values);
            console.log('Data removed successfully!');
        }
    });
}


//Ends db connection
function Close(){
    con.end();
}

exports = module.exports = {
    dbCreate, //Creates the database
    createTable, //Creates the table "polls" within the database
    Connect, //Connects to the database
    dbInsert, //Runs a mysql query to the database to insert data from the polls
    dbGetAverages, //Gets the averages of gpa and age from the polls
    dbRemove, //Removes data from the "polls" table
    Close, //Closes the connection to the database
    dbGetTotal, //Gets the total number of rows in the "polls" table
    dbGetAll,
    dbGetUni,
    dbGetMajor
};