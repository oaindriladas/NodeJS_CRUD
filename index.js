const express = require("express");
const app = express();
const port = process.env.PORT ||3000;
const Student = require("./database/student"),
bodyParser = require("body-parser");
app.use(express.json()); //used with postman

require("./database/conn");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=> 
{
    // res.send("Welcome to API creation.");
    res.render("home");
})

app.get("/register", function (req, res) {
	res.render("register");
});

app.get("/login", function (req, res) {
	res.render("login");
});

app.get("/logout", function (req, res) {
	res.redirect("/");
});

app.post("/login", async function (req, res)
{
    try
    {
    var studid = req.body.studentid;
    var level = req.body.level;
    console.log(studid); //debugging 
    const getstudent = await Student.findOne({s_id : studid});
    console.log(getstudent); //debugging

    if(getstudent != null)
    res.render("secret");
    }
    catch(e)
    {
        res.send(e);
    }
})

app.post("/student", (req,res) =>
{
    try{
    const addstudent = new Student(req.body);
    console.log(addstudent);
    addstudent.save();
    res.send("Added");
    }
    catch(e)
    {
        console.log(e);
    }
})

app.get("/students", async(req,res) =>
{
    try{
        const getstudent = await Student.find();
        res.send(getstudent);
    }
    catch(e)
    {
        res.send(e);
    }
})

app.post('/register',async(req, res)=>{


res.send("student registered!");
//code for inserting document into a collection
try{
    const addstudent = new Student(req.body);
    console.log(addstudent);
    addstudent.save();
    res.send("Added");
    }
    catch(e)
    {
        console.log(e);
    }
})

app.listen(port);