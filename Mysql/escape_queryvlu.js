//When query values are variables provided by the user, you should escape the values.
//This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

//The MySQL module has methods to escape query values:

//1.Escape query values by using the mysql.escape() method:

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

//2.You can also use a ? as a placeholder for the values you want to escape.
//In this case, the variable is sent as the second parameter in the query() method:

// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });


//3. If you have multiple placeholders, the array contains multiple values, in that order:

var name = 'Amy';
var adr = 'Mountain 21';
var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});