const express=require('express');
//const serverless=require('serverless-http');
const path=require("path");
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 3000;
//setting a path
const templatepath=path.join(__dirname,"../src/templates/views");
const partialpath=path.join(__dirname,"../src/templates/partials");
//middleware
app.use('/assets',express.static('assets'));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 

app.set('views', templatepath);
hbs.registerPartials(partialpath);
app.set("view engine","hbs");
//routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
})
//app.use('/.netlify/functions/app',express.Router());
//module.exports.handler=serverless(app);