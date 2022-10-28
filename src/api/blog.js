const express = require('express');
let {blogs} =  require("../data");

const blogrouter  = express.Router();



blogrouter.get("/blogs", (req, res)=>{
    console.log("/blogs");
    if(blogs.length > 0){
        return res.status(200).send(
            blogs
        );    
    }
    else{
        return res.status(500).send({msg: "something went wrong"});
    }
});

blogrouter.get("/blogs/:slug", (req, res)=>{
    const blog = blogs.filter(blog => blog.blogId == req.params.slug);
    
    if(blog.length <= 0)
    return res.status(500).send({msg: "something went wrong"});

    return res.status(200).send(blog);

});

blogrouter.post("/blog", (req, res)=>{
    const blog = req.body;
    blog.comments = [];

    const oldBlog = blogs.filter(b => b.blogId == blog.blogId);

    if(oldBlog.length){
        return res.status(500).send({msg: "blog with same id exists"});
    }

    blogs = [...blogs, blog];
    return res.status(200).send(blogs);
});

module.exports = {blogrouter};