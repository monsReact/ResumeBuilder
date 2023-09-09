import { Schema, model } from "mongoose"
import Joi from"joi"
const CoverSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    Greeting: {
        type: String,
        required: true
    },
    Intro: {
        type: String,
        required: true
    },
    Detail: {
        type: String,
        required: true
    },
    Conc: {
        type: String,
        required: true
    },
    Yours: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user_id:{
        type:String,
        required:true
    },
    image:{
        type:String,//store as a string
        required:true
    }
})
const Cover=model("Cover",CoverSchema)
const CoverValidate=Joi.object({
    fname:Joi.string().min(3).max(1000).required(),
    lname:Joi.string().min(3).max(1000).required(),
    role:Joi.string().min(3).max(2000).required(),
    Greeting:Joi.string().min(2).max(2000).required(),
    Detail:Joi.string().min(3).max(1000).required(),
    Intro:Joi.string().min(3).max(1000).required(),
    Conc:Joi.string().min(3).max(1000).required(),
    Yours:Joi.string().min(3).max(1000).required(),
    phone:Joi.string().min(3).max(200).required(),
    email:Joi.string().email().required(),
    address:Joi.string().min(3).max(3000).required(),
    image:Joi.string().required()
})
export {Cover,CoverValidate}