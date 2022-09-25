var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/Ecart";

MongoClient.connect( url, function(err, database){
    if(err) throw err;
    var dbo = database.db("Ecart");
    dbo.collection("products").deleteMany({orderid: "102"}, function(err, result){
        if(err) throw err;
        console.log("Deleted: "+result.deletedCount);
    })
})

MongoClient.connect( url, function(err, database){
    if(err) throw err;
    var dbo= database.db("Ecart");
    dbo.collection("orders").drop(function(err, res){
        if(err) throw err;
        else if (res) console.log("Collection dropped");
    })
})