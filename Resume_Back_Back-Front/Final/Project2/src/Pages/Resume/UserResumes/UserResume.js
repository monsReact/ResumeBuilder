import { useEffect,useState } from "react"
import ResumeTemplate from "../ResumeTemplate.js"
function UserResumes() {
    const [time,setTime]=useState([])
    const Getall = async () => {
        try {
            const Resume = await fetch("http://localhost:8000/Resume/Get", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,

                }

            })
            const resumeRes = await Resume.json()
            setTime(resumeRes?.Resumes)
            console.log(time)
            if (resumeRes?.error) {
                localStorage.setItem("token", " ")
                history.push("/Login")
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }
    useEffect(()=>{
        Getall()}, [time])
  return(
        <div >


            {time?.map((item, index) => {
                return (
                    <div key={index} >
                        <ResumeTemplate formData={item} />
                    </div>
                )
            })}
        </div>

    )
}
export default UserResumes