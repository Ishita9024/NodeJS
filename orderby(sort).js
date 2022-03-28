//Sort the Result
//Use the ORDER BY statement to sort the result in ascending or descending order.

//The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.
//1.Sort the result alphabetically by name:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY id", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//ORDER BY DESC
//Use the DESC keyword to sort the result in a descending order.

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
