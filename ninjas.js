const art = ["gotham", "cite","diomn","capri"]
const surd =["tery",34,67]
console.log(art)
module.exports = {
    art,surd
};
const fs =require("fs")
/*fs.readFile("./zeta.js" , (err,data)=>{
     if(err){
        console.log("kwani niko nchi ingine")
     }
     console.log(data.toString())
})
console.log("hello lines")*/
/*fs.writeFile("./zetas.js","Hello new world all the boys and girla", ()=>{
    console.log("stupid computer has done it again")
})*/
/*s.mkdir("./views", (err)=>{
   if(err){
    console.log("ee")
   }
   console.log("we did it babee")
})*/
/*fs.unlink("./zetas.js",(err)=>{
    if(err){
        console.log("whaat")
    }
    console.log("i make money")
})*/
fs.mkdir("./public",(err)=>{
    if(err){
        console.log("eerr")
    }
})