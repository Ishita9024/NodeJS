const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Vishu@1234',
        database: 'usersData'
    }
  })
  knex.schema.createTable('data_table', (table) => {
    table.increments("id")  
    table.string('username')
    table.string('password')
    table.string("email")
    }).then(() => console.log("table created"))
    .catch((err) => {
        console.log(" table already exist")
    })


const request=require("readline-sync")
var user=request.question("enter for signup or login : ")
if (user=="signup"){
  var Username = request.question("enter your username :");
  var Password = request.question("enter your password :");
  var Email= request.question("enter your email id:");
  const info = [
    { username:Username,password:Password ,email:Email},
]

knex('data_table').insert(info)
.then(() => console.log("signup successfully ","data inserted"))
    .catch((err) => { console.log("already inserted") })
}
else{
    if(user == "login"){
        var Email= request.question("enter your email id :");
        var Password = request.question("enter your password :");
        knex.from('data_table').select("*")
        .then((results) => {
        // console.log(results)
        var found=results.find(function(user){     ///find function use for find elements of arry
            if (user.password==Password && user.email==Email ){
                // console.log("login",user)
                return user
            }
        })
            if (found){

            console.log("login successfully")
            // console.log(found)
            }else{
                console.log("User not found or entered wrong password or username")
            }
    })
        .catch((err)=>{
        console.log(err)
        
    })
    }           
}
