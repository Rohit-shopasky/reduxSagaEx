const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{

    let data = [1,2,3,4,5];
    res.send({status:true,data:data});

})

app.post("/submit",(req,res)=>{
    console.log(req.body);
    //let data = req.body.data;
    res.send(req.body);

})

app.listen("3001");