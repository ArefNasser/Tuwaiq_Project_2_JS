const {users} = require('../dataBase/dbUsers')


const getAllUser = (req,res)=>{
    // console.log('All users')
    res.send(users)
}

const getUser = (req,res)=>{
    console.log(typeof users)
    const foundUser = users.filter((elem, i) =>{
        return i == req.params.id 
    })

    /* .find => element || undefined
    .filter => [element1, element2], || []
     */

    if(foundUser.length > 0){
    res.send(foundUser[0])
    return
    }
    res.status(404).send("user not found")
}

const addNewUser = (req,res)=>{
    const addedUser = {
        name: req.body.name,
        password : req.body.password,
        nationalId : req.body.nationalId,
        // email : req.body.email
        isAdmin: req.body.isAdmin,
    }
    console.log(req.body)

    users.push(addedUser)
console.log(addedUser)
    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    users.forEach((elem,i)=>{
        if(i == userId){
            elem.name = req.body.name;
            elem.password = req.body.password;
            elem.isAdmin = req.body.isAdmin;
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser}