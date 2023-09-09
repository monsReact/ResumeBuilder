import {User} from "../models/User.js";
import { Router } from "express";
import UserContr from "../Controllers/UserControllers.js";
import authmiddle from"../middlewares/authmiddlewares.js"
const UserRoute=Router()
UserRoute.post("/Signup",UserContr.Signup)
UserRoute.post("/Login",UserContr.Login)
UserRoute.get("/me",authmiddle,UserContr.me)

export default UserRoute
