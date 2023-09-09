import "./Signup.css"
import { useState } from "react"
import Login from "../Login/Login.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min.js";
import Nav from "../../Component/Navigation/Navigate";
function Signup() {
    const history = useHistory()
    const [fullName, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [res, setRes] = useState('')
    const handlefunction = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch("http://localhost:8000/User/Signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, email, password, confirm })

            })
            const resp = await response.json()
            console.log(resp)
            erro(await resp)//to show for user

        }
        catch (err) {
            console.log(err.message)

        }

    }
    function erro(resp) {
        if (resp?.error)//if has an error because in backend i return json error
            setRes(resp.error)
        if (resp?.message) //if has am message 
        {
            setRes(resp.message)
            history.push('/Login')
        }
        if (resp[0]?.message)//for validation
            setRes(resp[0].message)

    }
    return (
        <div className="SignupALogin">
            <Nav pagetype='signup' />
            <form className="formpage" onSubmit={handlefunction}>
                <div className="Form">
                    <label htmlFor="fullName" className="FormName">FullName :</label>
                    <input type="text" placeholder="Enter your FullName" id="fullName" className="formInput" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="Form">
                    <label htmlFor="Email" className="FormName">Email :</label>
                    <input type="email" placeholder="Enter your Email" id="Email" className="formInput" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="Form">
                    <label htmlFor="password" className="FormName">Password :</label>
                    <input type="password" placeholder="Enter your Password" id="Password" className="formInput" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="Form">
                    <label htmlFor="confirm" className="FormName">Confirm Pass :</label>
                    <input type="password" placeholder="Enter your confirm password" id="confirm" className="formInput" onChange={(e) => setConfirm(e.target.value)} />
                </div>
                <button className="Submit" >Signup</button>
            </form>
            <p className="Response">{res}</p>
        </div>
    )
}
export default Signup