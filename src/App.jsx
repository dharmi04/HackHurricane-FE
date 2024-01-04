import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import { GetStartedRegistration } from './Pages/GetStartedRegistration'
import { GetStartedLogin } from './Pages/GetStartedlogin'
import Home from "./Pages/Home"
import LandingPage from "./Pages/LandingPage"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth/get-started/login" element={<GetStartedLogin />} />
          <Route
            path="/auth/get-started/register"
            element={<GetStartedRegistration />}
          />
        </Routes>
      </Router>

    </>
  )
}

export default App
