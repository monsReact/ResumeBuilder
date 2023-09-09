import CoverTemplate from "../../../../Component/PersonalInfo/PersonalInfo.js"
import { useEffect, useState } from "react"
function UserCovers() {
    const [time, setTima] = useState([])

    const Getall = async () => {
        try {
            const Covers = await fetch("http://localhost:8000/Cover/Get", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }

            })
            const coverRes = await Covers.json()
            setTima(coverRes?.Covers)
            console.log(time)
            if (coverRes?.error) {
                localStorage.setItem("token", " ")
                history.push("/Login")
            }

        }
        catch (err) {
            console.log(err.message)

        }

    }
    useEffect(() => {

        Getall()
    }, [time])

    return (

        <div >


            {time?.map((item, index) => {
                return (
                    <div key={index} >
                        <CoverTemplate formData={item} />
                    </div>
                )
            })}
        </div>

    )
}
export default UserCovers