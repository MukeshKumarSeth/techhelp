var userModel=require('../model/userModel');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const saltRounds = 10;

async function addUser(req,res){//to save user data
    bcrypt.hash(req.body.password, saltRounds,function(err, hash) {//to encrypt user password
        if(!err){
            const userData= new userModel.User({
                name : req.body.name,
                email : req.body.email,
                password :hash,
                address : req.body.address,
                city : req.body.city,
                state : req.body.state,
                zip : req.body.zip,
                gender : req.body.gender,
            });
            userData.save()
                .then(doc => {
                const token = jwt.sign({ email: req.body.email }, process.env.PRIVATE_KEY,{ algorithm: 'HS256'});
                    res.json({ status: true, response: 'User Saved Successfully',token:token});
                })
                .catch(err => {
                    console.log('this is error', err);
                    res.json({ status: false, response: 'Problem in saving' });
                });
        }else{
            console.log('this is encryption error', err);
            res.json({ status: false, response: 'Problem in saving' });
        }
    });

    // userData.save((err,doc)=>{
    //     console.log(userData);
    //     if(!err){
    //         res.json({status : true,response :'User Saved Successfully'});
    //     }else{
    //         console.log('this is error',err);
    //         res.json({status : false,response :'Problem in saving'});
    //     }
    // });
}
module.exports={
    addUser
}