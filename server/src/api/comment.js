const express  = require("express");
const {blogs} = require("../data");

const commentRouter = express.Router();

commentRouter.get("/comments/:blogId", (req, res)=>{

    const blog = blogs.filter(b => b.blogId == req.params.blogId);

    if(blog.length <= 0){
        return res.status(500).send({msg : "blog does not exists"});
    }

    console.log(blog);

    res.status(200).send({comment: blog[0].comments});

});

commentRouter.get("/comments/:blogId/:commentId", (req, res)=>{

    const blog = blogs.filter(b => b.blogId == req.params.blogId);

    if(blog.length <= 0){
        return res.status(500).send({msg : "blog does not exists"});
    }

    const comment  = blog[0].comments.filter(c => c.commentId == req.params.commentId);

    res.status(200).send(comment);

});

commentRouter.post("/comments/:blogId", (req, res)=>{
    //TODO
});

module.exports = {commentRouter}