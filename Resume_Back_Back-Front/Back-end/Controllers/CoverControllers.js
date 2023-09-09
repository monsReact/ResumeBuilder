import { Cover,CoverValidate } from "../models/Cover.js";
const CoverContro={
    CreateCover:async(req,res)=>{
        const {error}=CoverValidate.validate(req.body,{abortEarly:false})
        if(error)
        return res.status(422).json(error.details)
    try{
    const {id}=req.user
    const cover=new Cover({...req.body,user_id:id})
    await cover.save()
    res.status(201).json({ message: "User Cover created successfully", cover});

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({ error: "An error occurred while creating your Cover" })
    }
    },
    GetAllCover:async(req,res)=>{
        const {id} =req.user
        try{
        const Covers=await Cover.find({user_id:id})
        return res.status(200).json({Covers})
        }
        catch(error)
        {
            console.log(error);
            res.status(500).json({ error: "An error occurred while getting your Covers" })
        }
    },
  

}
export default CoverContro