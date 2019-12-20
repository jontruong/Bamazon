var mysql = require('mysql');
var inquirer = require('inquirer');
var colors = require('colors');

var connection = mysql.createConnection({
    host: "localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"bamazon"
});

connection.connect(function(error){
    if(error) throw error;
    viewItems();
})

function viewItems(){
    console.log(`WELCOME TO BAMAZON! HERE ARE THE ITEMS FOR SALE:\n`.green);
    connection.query("Select * FROM products", function(err,result){
        if (err) throw err;
       result.forEach(product => {
        console.log(`ID: ${product.id} PRODUCT: ${product.product_name}. 
DEPARTMENT: ${product.department_name} PRICE: ${product.price} STOCK: ${product.stock_quantity} 
`.bold.brightWhite);
       });
       buyItems();
    });  
}

function buyItems(){
        inquirer.prompt([{
            name:"id",
            message:"What is the id of the item you are trying to buy?".blue,
            type:"input",
        },
        {
           name:"quantity",
           message:"How many do you want to buy?".blue,
           type:"input",
        }
    ]).then(function(answer){
        const query = `SELECT * FROM products WHERE id = ${answer.id}`;
        connection.query(query, function(err,res){
            if(err) throw err;
            console.log(res)
            if(res[0].stock_quantity >=  answer.quantity){
                decreaseStock(answer.quantity, answer.id);
                const total = answer.quantity * res[0].price;
                console.log(`Total cost = $${total}`.bold.red);
            }
            else{
                console.log(`
                Insufficient quantity!
                Maximum purchase amount = ${res[0].stock_quantity}
                `)
            }
            connection.end();
        })
    })
    }

function decreaseStock(quantity, id){
    const query = `UPDATE products SET stock_quantity = stock_quantity - ${quantity} WHERE id = ${id}`;
    connection.query(query, function(err,res){
        if(err) throw err;
    })
}


