import Nav from "../../Component/Navigation/Navigate"
import { Link } from 'react-router-dom'
import "./Resume.css"
import InformaionTemplate from "./Information"
import Login from "../Login/Login"
import { useEffect, useRef } from "react"
import { useHistory } from 'react-router-dom';

function Resume() {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token") === " ") {
            history.push('/Login')
        }

    }
      , [localStorage.getItem("token")])
    return (
        <div className="Resume" >
            <Nav pagetype='resume' />
            <InformaionTemplate />
        </div>
    )
}
export default Resume