//To select data from a table in MySQL, use the "SELECT" 
// 1.SELECT * will return all columns

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//2. Select Columns

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name FROM customers", function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result[2].address); //Here result is an object.
  });
});


//3. The Fields Object

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    console.log(fields[1].name);
  });
});
