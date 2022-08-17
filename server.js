const http = require("http")
 const server=http.createServer((req,res)=>{
    //res.setHeader("Content-Type","text/plain")
res.write("what what what")
res.end()
})
server.listen(5500,'localhost',()=>{
    console.log("we are in")
})