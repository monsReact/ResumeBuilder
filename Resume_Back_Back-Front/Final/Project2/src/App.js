

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import CoverLetter from './Pages/CoverLetter/Cover'
import Resume from './Pages/Resume/Resume'
import Footer from './Component/Footer/Footer'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import UserCovers from"./Pages/CoverLetter/Sub/UserCovers/UserCover"
import UserResumes from"./../src/Pages/Resume/UserResumes/UserResume.js"
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/About"><About /></Route>
        <Route path="/resume"><Resume /></Route>
        <Route path="/cover"><CoverLetter/></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login/></Route>
        <Route path="/UserCovers"><UserCovers /></Route>
        <Route path="/UserResumes"><UserResumes /></Route>

      </Switch>
      <Footer />
    </Router>
  )
}

export default App;