//You can limit the number of records returned from the query, by using the "LIMIT" statement:

//1.Select the 5 first records in the "customers" table:
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//2,Start From Another Position
//If you want to return five records, starting from the third record, you can use the "OFFSET" keyword:

//Start from position 3, and return the next 5 records:

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";//"OFFSET 2", means starting from the third position, not the second!
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//3.Shorter Syntax
//You can also write your SQL statement like this "LIMIT 2, 5" which returns the same as the offset example above:

//Start from position 3, and return the next 5 records:

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//(Note: The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2")