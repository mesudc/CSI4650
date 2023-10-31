const mysql = require('mysql2');
// create a new MySQL connection

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

//Create database if not exists 'mydb'

con.query('CREATE DATABASE IF NOT EXISTS mydb', (error, results) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Database created successfully!');
    }
    }
);

//Create table if not exists 'polls' with Id, name, age, university, major, gpa
con.query('CREATE TABLE IF NOT EXISTS mydb.polls (Id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, age INT NOT NULL, university VARCHAR(255) NOT NULL, major VARCHAR(255) NOT NULL, gpa FLOAT NOT NULL, PRIMARY KEY (Id))', (error, results) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Table created successfully!');
    }
    }
);

// connect to the MySQL database
con.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
// close the MySQL connection
con.end();