const express = require('express');
const {blogrouter} = require("./api/blog");
const {commentRouter} = require('./api/comment');
const bodyParser  = require("body-parser");
const {mongoose } = require('mongoose');

const app = express();

try{
    mongoose.connect("mongodb://0.0.0.0:27017/ecom");
    console.log("Successfully connected to mongodb");
}
catch(err){
    console.log(err);
}
app.use(bodyParser.json());
app.use(blogrouter);
app.use(commentRouter);

app.get("/", (req, res)=>{
    res.status(200).send({msg: 'hello world'});
});

app.listen(8000, ()=>{
    console.log("Server running on http://localhost:8000");
});