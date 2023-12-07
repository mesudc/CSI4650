const { create } = require('domain');
const mysql = require('mysql');
// create a new MySQL connection

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

//Create database if not exists 'mydb'
//Uncomment to create database locally on your machine
dbCreate(); 

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

//Create table if not exists 'poll' with inPerson, online, hybrid
createTable();
function createTable() {
    con.query('CREATE TABLE IF NOT EXISTS mydb.poll (inPerson INT NOT NULL, hyflex INT NOT NULL, online INT NOT NULL)', (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Table created successfully!');
        }
        }
    );
}

//Insert poll data into table 'poll' with inPerson, online, hybrid

async function dbInsert(inPerson, hyflex, online) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO mydb.poll (inPerson, hyflex, online) VALUES (?, ?, ?)`;
        const values = [inPerson, hyflex, online];

        con.query(sql, values, (error, results) => {
            if (error) {
                console.error(error);
                reject(error);
            } else {
                console.log('Data to be inserted: ', values);
                console.log('Data inserted successfully!');
                resolve(results);
            }
        });
    });
}

//Get all values from table 'poll'
async function dbGet() {

    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM mydb.poll`;

        con.query(sql, (error, results) => {
            if(error){
                console.error(error);
                reject(error);
            } else {
                console.log('Results:', results);
                resolve(results);
            }   
        });
    });
}
exports = module.exports = {
    dbCreate, //Creates the database
    createTable, //Creates the table "polls" within the database
    dbInsert, //Inserts data into the table "polls"
    dbGet, //Gets all data from the table "polls"
};