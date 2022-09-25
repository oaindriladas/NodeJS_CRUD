var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";

/* MongoClient.connect(url, function(err, database){
if(err) throw err;
var db = database.db("Ecart");
db.collection("products").insertOne( { productid:"05", p_name: "keyboard", price: "8000"} , function(err, result){
if(err) throw err;
console.log("these records are added: "+result.insertedId);
});
}); */

/* MongoClient.connect(url, function(err, database){
    if(err) throw err;
    var db = database.db("Ecart");
    var product_array = [
        {productid:"02", p_name: "bags", price: "8000"},
        {productid:"03", p_name: "shoes", price: "4000"},
        {productid:"04", p_name: "haedfones", price: "2000"}
    ];
    db.collection("products").insertMany(product_array, function(err, result){
        if(err) throw err;
        console.log("these records are added: "+result.insertedCount);
    })
    }); */
    
   /*  MongoClient.connect(url, function(err, database){
        if(err) throw err;
        var db = database.db("Ecart");
        var product_array = [
            { orderid:"102", product_id: "02", quantity:"9",  cost: "9000" },
            { orderid:"103", product_id: "01", quantity:"10",  cost: "10000" },
            { orderid:"101", product_id: "02", quantity:"90",  cost: "90000" }
        ];
        db.collection("orders").insertMany(product_array, function(err, result){
            if(err) throw err;
            console.log("these records are added: "+result.insertedCount);
        })
        }); */

      