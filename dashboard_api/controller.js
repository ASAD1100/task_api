
const handleRegister= (req, res, database)=>{
    const {username, password, id="0"+(database.users.length + 1),  joined=new Date()}=req.body
    const user_name= database.users.find(user=>user.username === username && user.password===password)
    if(!user_name)
        {
        database.users.push({id, username, password, joined})
        res.send(database.users)
    }
    
    else
    {
        return res.status(400).send("user already exists")
    }
    
}

const handleLogin= (req, res, database)=>{
    const {username, password} =req.body
    const user_name= database.users.find(user=>user.username === username && user.password === password)

    if (user_name){
        res.send(user_name)
    }else{
        return res.status(404).json('incorrect username/ password');
    }
}


const handleForgotPassword= (req, res, database)=>{
    const {username, oldpassword, newpassword}=req.body
    const userIndex=database.users.findIndex(user=>user.username === username && user.password === oldpassword)
    if (userIndex===-1)
    {
        return res.status(404).json('incorrect username/ password');
    }

    database.users[userIndex].password=newpassword
    res.json(database.users[userIndex])
}

const updateProfile=(req, res, database)=>{
    const {id}=req.params
    const {newusername, newpassword}=req.body
    const userIndex=database.users.findIndex(user=> user.id===id)
    if (userIndex===-1)
    {
        return res.status(404).json('incorrect credentials');
    }

    database.users[userIndex].username=newusername
    database.users[userIndex].password=newpassword
    res.json(database.users[userIndex])
}


module.exports=
{
    handleRegister,
    handleLogin,
    handleForgotPassword,
    updateProfile,

}