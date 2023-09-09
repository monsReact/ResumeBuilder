import { Schema,model } from "mongoose";
import  Joi from"joi"
const userSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
  password:{
    type:String,
    required:true,
    select:false
  }
})
const User=model("User",userSchema)
const SignupSchema=Joi.object({
    fullName:Joi.string().min(5).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(5).max(20).required(),
    confirm:Joi.string().valid(Joi.ref("password")).required(). messages({ 'any.only': 'password not match' })
})
const LoginSchema=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(5).max(20).required()
})
export {User,SignupSchema,LoginSchema}