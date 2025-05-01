const express = require('express');
const { loginUser, registerUser, getUserProfile } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post("/register",registerUser);  
userRouter.post("/login",loginUser);        
userRouter.get("/profile", getUserProfile); 


module.exports = userRouter;