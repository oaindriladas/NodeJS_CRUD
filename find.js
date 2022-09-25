var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";

/*   MongoClient.connect( url , function(err, database){
    if(err) throw err;
    var db = database.db("Ecart");
    var query = {productid:"01"};
    db.collection("products").findOne(query, function(err, result){
        if (err) throw err;
        console.log("Result is" +result.p_name);
    })

db.collection("orders").find({}).toArray( function(err, res){
if(err) throw err;
console.log(res);
});
}); */
//update single document
MongoClient.connect(url, function(err, database){
if(err) throw err;
var db = database.db("Ecart");
var oldquery = {orderid: "102"};
var newquery = { $set: { quantity:"15", cost: "15000"}};
db.collection("orders").updateOne(oldquery, newquery, function(err, res){
    if(err) throw err;
    console.log("Updated this: "+res.modifiedCount);
})
})
