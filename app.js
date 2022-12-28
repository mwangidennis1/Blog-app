const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Blog = require("./models/blog")

const mongourl="mongodb+srv://amincharge:1738deno@1738.8qr8j.mongodb.net/1738?retryWrites=true&w=majority"
mongoose.connect(mongourl)
   .then((result)=>{console.log("no problemo")})
   .catch((err)=>{console.log("access denied")})
app.use(express.static("publics"))
app.use(express.urlencoded({extended : true}))

app.set("view engine", "ejs")

app.get("/" , (req,res)=> {
   res.redirect("/blogs")
}) 
// blog routes
app.get("/blogs", (req,res) =>{
   Blog.find()
   .then((result)=>{
      res.render("index",{blogs : result})
   })
   .catch((err) =>{
      console.log(err)
   })

})
app.get("/blogs/:id",(req,res)=>{
   const id = req.params.id;
   console.log(id)
   Blog.findById(id)
   .then((result)=>{
      res.render("details",{blogs : result})
   })
   .catch((err)=>{
      console.log(err)
   })
})
app.delete("/blogs/:id",(req,res)=>{
   const id = req.params.id
   Blog.findByIdAndDelete(id)
   .then(result =>
       {res.json({redirect : "/blogs"})})
   })
   /*.catch(err=>{
   console.log(err)
})*/
app.post("/index" ,(req,res) =>{
   const blog = new Blog(req.body)
   blog.save()
   .then((result) =>{
      res.redirect("/") 
   })
})
app.get("/about" , (req,res)=> {
    res.render("about") 
 })

 app.get("/create" , (req,res)=> {
    res.render("create")
 })
 app.use((req,res)=>{
    res.render("404")
 })

app.listen(3000);