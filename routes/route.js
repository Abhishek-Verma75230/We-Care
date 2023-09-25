import express from "express";
import { signupuser } from "../Controller/UserController.js";
import { loginuser } from "../Controller/UserController.js";
import { signupp } from "../Controller/UserControllerp.js";
import { loginuserp } from "../Controller/UserControllerp.js";
const Router=express.Router();







Router.post('/signup',signupuser);
Router.post('/login',loginuser);
Router.post('/psignup',signupp);
Router.post('/plogin',loginuserp);













export default Router;
