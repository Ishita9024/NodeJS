//Delete a Table(You can delete an existing table by using the "DROP TABLE" statement:)

//1.You can delete an existing table by using the "DROP TABLE" statement:
// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Vishu@1234",
//   database: "mydb"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE custom";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

//2.If the the table you want to delete is already deleted, or for any other reason does not exist, 
//you can use the IF EXISTS keyword to avoid getting an error.

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS custom";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
    console.log(result); //Here result is an object.
  });
});

//(Note:the only differnce is that the warningCount property is set to 1 if the table does not exist 
//      otherwise warningCount property is set to 0 if the table exist)
