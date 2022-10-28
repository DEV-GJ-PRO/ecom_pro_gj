const express = require('express');
const {blogrouter} = require("./api/blog");
const {commentRouter} = require('./api/comment');
const bodyParser  = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(blogrouter);
app.use(commentRouter);

app.get("/", (req, res)=>{
    res.status(200).send({msg: 'hello world'});
});

app.listen(8000, ()=>{
    console.log("Server running on http://localhostL8000");
});