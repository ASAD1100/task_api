const express= require('express');

const database = require('../database')
const {handleRegister , handleLogin , handleForgotPassword, updateProfile} = require('./controller')


//const db = require('knex')({
//    client: 'sqlite3', 
//    connection: {
//        filename: "../../backend_practical/test.db"
//        }
//});


const dsb= express();
dsb.use(express.json());

dsb.listen(5000,()=>{
    console.log("server is running on port 5000")
})




dsb.post('/register', (req, res, )=>{ handleRegister(req, res, database, )}) //for testing puposes input username and password in json format

dsb.post('/login', (req, res)=>{ handleLogin(req, res, database)})//for testing puposes input username and password in json format

dsb.put('/forgotpassword', (req, res)=>{handleForgotPassword(req, res, database)    })//for testing puposes input username , oldpassword and newpassword in json format

dsb.put('/login/:id/updateprofile', (req, res)=>{updateProfile(req, res, database)})//for testing puposes input newusername and newpassword in json format with the correct id in url




/*USER DASHBOARD API, (REGISTER USER , LOGIN USER , CHANGE PASSWORD , UPDATE PROFILE).
 GLOBAL ERROR HANDLING */