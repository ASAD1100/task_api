const handleAdminLogin=(req,res)=>{
    if (req.body.username === database.admin[0].username &&
        req.body.password === database.admin[0].password)
        {
            res.send('Login success')
             } 
    
        else{
            return res.status(404).json('incorrect Admin username/password');
        }
    
}

const handleAllUsers=(res)=>{
    alluser=[]
    for(let i=0; i<database.users.length; i++)
    {
    alluser.push(database.users[i].username)
    }
    res.json(alluser)
}

const updateUser=(req,res)=>{
    const userId=req.params.id
    const {id, username, password}=req.body

    const userIndex=database.users.findIndex(user=>user.id===userId)

    if (userIndex ===-1)
    {
        return res.status(400).send('User Not found');

    }
    database.users[userIndex].id=id
    database.users[userIndex].username=username
    database.users[userIndex].password=password
    res.json(database.users[userIndex]);   
}

const deleteUser=(req,res)=>{
    const userIndex=database.users.findIndex(user=>user.id===req.params.id)
    if (userIndex ===-1)
    {
        return res.status(400).send('User Not found');

    }
    database.users.splice(userIndex,1)
    res.send('User deleted successfully')


}

const getPassword=(req, res)=>{
    const userId=req.params.id

    const userIndex=database.users.findIndex(user=>user.id===userId)
    if (userIndex ===-1)
    {
        return res.status(400).send('User Not found');

    }
    const userPassword=database.users[userIndex].password
    res.send(userPassword)
}

module.exports={
    handleAdminLogin,
    handleAllUsers,
    updateUser,
    deleteUser,
    getPassword
}

