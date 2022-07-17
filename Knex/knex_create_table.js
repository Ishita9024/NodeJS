const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Vishu@1234',
        database: 'mydb1'
    }
}

const knex = require('knex')(options);

function create(){
    knex.schema.createTable('cars', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('price')
}).then(() => console.log("table created"))
    .catch((err) => { 
        console.log("table exist")
    });
    
}
create();

