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
//   console.log("Connected!");
//   con.query("CREATE DATABASE usersData", function (err) {
//     if (err) {
//     console.log("Database already exist");
//   }else{
//     console.log("Database created");
//   }
//   });
// });
// var sql = "CREATE TABLE data (username VARCHAR(255), password VARCHAR(255), email VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err) {
//   console.log("table Already exist");
// }
// else{
//   console.log("Table created");
// }
// })
if (user_choice=="signup"){
  username=readline_sync.question("enter the name : ")
  password=readline_sync.question("enter the password and  password length should be 6 or greater than 6 : " )
  email=readline_sync.question("enter the email : ")
  var sq = "INSERT INTO data (username,password,email) VALUES ?";
  var values=[
    [username,password,email]
  ];
  con.query(sq, [values], function (err, result) {
    if (err) {
    console.log("inserted")
    }
    });
  }

else{
  if(user_choice == "login"){
    var email= readline_sync.question("enter your email :");
    var password = readline_sync.question("enter your password :");
    var sql="SELECT*FROM data ";             
    con.query(sql, function(err, results,fields){     
      if(err) {
        console.log("err");
      }
      else{
            // console.log(results)
            var found=results.find(function(user_choice){     ///find function use for find elements of arry
                if (user_choice.password==password && user_choice.email==email ){

                    return user_choice
                }
            })
            if (found){

            console.log("login successfully")
            console.log(found)
            }else{
                console.log("User not found or you entered wrong password or email")
            }
        }
                  
      });
      
    
      }
  }
