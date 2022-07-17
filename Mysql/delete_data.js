//Delete Record(You can delete records from an existing table by using the "DELETE FROM" statement:)

//1.Delete any record with the name "Ishu":
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE name = 'Ishu'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});


//Notice the WHERE clause in the DELETE syntax: The WHERE clause specifies which record 
//or records that should be deleted. If you omit the WHERE clause, all records will be deleted!
// Result is an object.