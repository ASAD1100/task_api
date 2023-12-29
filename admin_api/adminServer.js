const express=require('express')

const database=require('../database')

const {handleAdminLogin, handleAllUsers, updateUser, 
    deleteUser, getPassword} = require('./controller.js')

//const db = require('knex')({
//    client: 'sqlite3',
//    connection: {
//        filename: "../../backend_practical/test.db"
//        }
//});

//console.log(knex.select('*').from('users').then(data=>{console.log(data)}))

const app=express()
app.use(express.json())

app.listen(3000, ()=>{
    console.log('Server is running at port 3000')
})
app.get('/',(req, res)=>{
    res.send(database.users)
})



app.post('/adminlogin', (req, res)=>{handleAdminLogin(req, res, database)})//for testing puposes input adminusername and adminpassword in json format

app.get('/adminlogin/allusers', (res)=>{handleAllUsers(res, database)  })

app.put('/adminlogin/updateuser/:id', (req,res)=>{updateUser(req, res, database)  })//for testing puposes input username and password in json format with id in url

app.delete('/adminlogin/deleteuser/:id', (req,res)=>{deleteUser(req, res, database)})//for testing puposes put the user id in jurl

app.get('/adminlogin/showuserpassword/:id',(req, res)=>{getPassword(req, res, database)})//for testing puposes put the user id in jurl




