import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom/cjs/react-router-dom.min.js"
import Signup from "../Signup/Signup.js"
import Nav from "../../Component/Navigation/Navigate.js"
function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [res, setRes] = useState()
    const history = useHistory()
    const { Set } = props
    const loginHandel = async (event) => {
        event.preventDefault()
        try {
            const logRsponse = await fetch("http://localhost:8000/User/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            const logRes = await logRsponse.json()
            updateRes(logRes)
            localStorage.setItem("token", logRes?.token)
            if (logRes?.token)
                history.push('/Resume')
            console.log(logRes.token)
            Set(localStorage.getItem("token"))
        }
        catch (err) {
            console.log(err.message)
        }
    }

    function updateRes(resp) {
        if (resp?.error)
            setRes(resp.error)
        if (resp?.message)
            setRes(resp.message)
        if (resp[0]?.message)
            setRes(resp[0].message)
    }

    return (
        <div className="SignupALogin">
            <Nav pagetype='login' />
            <p className="Response">You Signedup or Token is expired</p>
            <form className="formpage" onSubmit={loginHandel}>
                <div className="Form">
                    <label htmlFor="Email" className="FormName">Email :</label>
                    <input type="email" placeholder="Enter your Email" id="Email" className="formInput" onChange={(e) =>{ setEmail(e.target.value)}}/>
                </div>
                <div className="Form">
                    <label htmlFor="fullName" className="FormName">Password :</label>
                    <input type="password" placeholder="Enter your Password" id="Password" className="formInput" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="Submit">Login</button>
            </form>
            <p className="Response">{res}</p>
        </div>
    )
}
export default Login