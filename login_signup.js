var mysql = require('mysql');
const readline_sync=require("readline-sync")
var user_choice=readline_sync.question("Do you want to Login/Signup?")
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vishu@1234",
  database:"usersData"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE usersData", function (err) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE data (username VARCHAR(255), password VARCHAR(255), email VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err ;
//     console.log("table created");
// })
// })
if (user_choice=="signup"){
  username=readline_sync.question("enter the name : ")
  password=readline_sync.question("enter the password and  password length should be 6 or greater than 6 : " )
  email=readline_sync.question("enter the email : ")
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sq = "INSERT INTO data (username,password,email) VALUES ?";
    var values=[
      [username,password,email]
    ];
    con.query(sq, [values], function (err, result) {
      if (err) {
      console.log(err)
      }
      else{
       // Here result is an object. You can access the properties of it by using dot notation and bracket notation)
      console.log("Number of records inserted"+result.affectedRows);
      }
      
    });
  })
}
else{
  username=readline_sync.question("enter the name : ")
  password=readline_sync.question("enter the password : " )
  

}

