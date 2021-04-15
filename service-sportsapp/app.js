const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Category = require('./models/Category');

//Middleware
app.use(cors());
app.use(express.json());//this packages the incomsing/outgoing data as JSON
app.use(express.urlencoded({
    extended: false
}));//This monitors data incoming on the URL

app.get("/api/test", (req,res) =>{
    res.json({
        ime: "lana"
    })
    return;
})

app.get("/api/categories", (req,res) =>{
    Category.find({ }, function( err, data){
        if(err) {
            res.status(500).send(err); 
            return;
        } 
        res.status(200).json(data);
        return;
    })
    
})

app.post("/api/add-categories", (req,res) =>{
    var cat = req.query.cat;
    console.log(typeof(cat));
    if (cat === null || cat === undefined || cat == "") {
        res.status(400).send("Krivo!"); 
        return
    }
    try {
        var newCategory = new Category({
            name:cat
        })
        newCategory.save()
        res.status(200).send("Bok");
        return;
    } catch (error) {
        res.status(500).send(error);
        return;
    }
    

    
})


//Connect to local DB called test
mongoose.connect('mongodb://localhost:27017/sportapp', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=> {
    console.log('Connected to the DB');
})

//Listening for requests on localhost:3000
app.listen(3000, ()=>{
    console.log('This Server is listening on Port 3000');
})

