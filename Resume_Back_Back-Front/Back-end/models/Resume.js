import { Schema, model } from "mongoose";
import Joi from "joi";
const DataSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
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
    LinkidIn: {
        type: String,
    },
    Portfolio: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    Summary: {
        type: String,
        required: false
    },
    Degree: {
        type: String,
        required: true
    },
    Uni: {
        type: String,
        required: true
    },
    EduLoc: {
        type: String,
        required: true
    },
    GradYear: {
        type: String,
        required: true
    },
    GradMonth: {
        type: String,
        required: true
    },
    AcademicHonors: {
        type: String,
    },
    SkillDetails: [{//mean array of object
        add_skill: {
            type: String
        }
    }],
    HobbyDetails: [{
        add_hobby: {
            type: String
        }
    }],
    workExpDetails: [{
        designation: {
            type: String
        },
        company: {
            type: String
        },
        responsibilities: {
            type: String
        },
        startMonth: {
            type: String
        },
        endMonth: {
            type: String
        },
        presentWork: {
            type: Boolean,
            default:false
        }
    }],
    user_id: {
        type: String,
        required: true
    },

})
const Resume = model("Resume", DataSchema);
const ResumeValidate = Joi.object({
    fname: Joi.string().min(5).max(30).required(),
    lname: Joi.string().min(5).max(30).required(),
    phone: Joi.string().min(3).max(200).required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    LinkidIn: Joi.string(),
    Portfolio: Joi.string(),
    image: Joi.string().required(),
    Summary: Joi.string().min(2).required(),
    Degree: Joi.string().required(),
    Uni: Joi.string().required(),
    EduLoc: Joi.string().required(),
    GradYear: Joi.string().required(),
    GradMonth: Joi.string().required(),
    AcademicHonors: Joi.string(),
    SkillDetails: Joi.array().required(),
    HobbyDetails: Joi.array().required(),
    workExpDetails: Joi.array().required()

})
export { Resume, ResumeValidate }