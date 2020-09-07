const conn =  require('./config/database.js');
require('dotenv').config();
const express = require('express');
const router = require('./route/routes');
const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(function(req,res,next){//this code is used to crate cores policy when server is getting data form another port or server
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,OPTIONS,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,authorization,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
});

app.use(router);



global.__basePath = __dirname;//to create global path for uploads etc
app.listen(3002,()=>{
    console.log('server started on 3002');
})