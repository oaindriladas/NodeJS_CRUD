const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    s_id:{
        type:Number,
        unique:true,
        required:true
    },
    s_name:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    level:{
        type:String,
        unique:true,
        default: "UG",
        trim:true
    }
}
    )

    const Student = new mongoose.model("Student" , studentSchema);
    module.exports= Student;