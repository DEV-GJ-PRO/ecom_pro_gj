const express = require('express');
let {blogs} =  require("../data");
const {Blog} = require("../models/Blog");

const blogrouter  = express.Router();



blogrouter.get("/blogs", async (req, res)=>{
        
    const blogs =  await Blog.find()

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

blogrouter.get("/blogs/:slug", async (req, res)=>{

    //const blog = blogs.filter(blog => blog.blogId == req.params.slug);
    
    const blog =  await Blog.findOne({blogId : req.params.slug});


    if(!blog)
    return res.status(500).send({msg: "something went wrong"});

    return res.status(200).send(blog);

});

 blogrouter.post("/blog", async (req, res)=>{
    const blog = req.body;
    blog.comments = [];

    //const oldBlog = blogs.filter(b => b.blogId == blog.blogId);

    const oldBlog = await Blog.findOne({blogId: blog.blogId});
    console.log(oldBlog);

    if(oldBlog != null && oldBlog.length){
        return res.status(500).send({msg: "blog with same id exists"});
    }

    const newBlog = new Blog(blog);
    await newBlog.save();

    //blogs = [...blogs, blog];
    return res.status(200).send(newBlog);
});

module.exports = {blogrouter};