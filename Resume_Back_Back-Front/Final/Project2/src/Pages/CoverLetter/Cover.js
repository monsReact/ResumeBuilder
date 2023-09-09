import CoverScreen from "./CoverDetail";
import { useEffect } from "react"
import { useHistory } from 'react-router-dom';

function CoverLetter() {

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token") === " ") {
      history.push('/Login')
    }

  }
, [localStorage.getItem("token")])

  return (
    <div className="CoverLetter">
      <CoverScreen />
    </div>
  )
}
export default CoverLetter