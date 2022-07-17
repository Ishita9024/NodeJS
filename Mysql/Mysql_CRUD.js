var mysql = require('mysql');
var user = require("readline-sync")

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database: "usersData"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE information (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err){
        console.log("already table created");
    }
    else{
        console.log("table created")
    }
  });
});

var choice=user.question("enter the query:-")

if(choice=="insert"){

    var sql = "INSERT INTO information (name, address) VALUES ? ";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    con.query(sql,[values], function (err, result) {
        if (err) throw err;
        console.log("record inserted");
    });
}
else if(choice=="update"){

    var sql = "UPDATE information SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}
else if(choice=="select"){
    con.query("SELECT * FROM information", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}
else if(choice=="delete"){
    var sql = "DELETE FROM information WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
}