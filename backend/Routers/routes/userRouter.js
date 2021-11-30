const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser, checkUserLogin} = require("../controllers/user");
const { users } = require("../dataBase/dbUsers");
// /user/ get
userRouter.get('/',getAllUser);
userRouter.get('/:id',getUser);
userRouter.post('/login', checkUserLogin)
userRouter.post('/register',addNewUser);
userRouter.put('/user',updateUser);


module.exports={userRouter};