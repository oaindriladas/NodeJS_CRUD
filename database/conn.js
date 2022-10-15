const mongoose = require("mongoose");

try {
    mongoose.connect("mongodb://127.0.0.1:27017/college")
    .then(
        ()=>
        { console.log("Connection created"); }
    )
    .catch(
        ()=>
        {console.log("Unsuccessful"); }
    )   }
catch(error)
{
console.log(error);
}
finally { console.log('try catch');}

module.exports = mongoose;