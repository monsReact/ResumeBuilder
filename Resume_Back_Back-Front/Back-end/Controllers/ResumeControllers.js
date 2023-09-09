import { Resume,ResumeValidate } from "../models/Resume.js";
const ResumeContro={
    CreateResume:async(req,res)=>{
        const {error}=ResumeValidate.validate(req.body,{abortEarly:false})
        if(error)
        return res.status(422).json(error.details)
    try{
    const {id}=req.user
    const resume=new Resume({...req.body,user_id:id})
    await resume.save()
    res.status(201).json({ message: "User Resume created successfully", resume});
    }
    catch(error)
    {
    console.log(error);
    res.status(500).json({ error: "An error occurred while creating your Resume" })
    }
    },
    GetAllResume:async(req,res)=>{
        const {id} =req.user
        try{
        const Resumes=await Resume.find({user_id:id})
        return res.status(200).json({Resumes})
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({ error: "An error occurred while getting your Resumes" })
        }
    },
   
    
}
export default ResumeContro