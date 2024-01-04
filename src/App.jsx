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
import PropertyDetails from "./Pages/PropertyDetails"
//import SubscriptionComponent from "./Components/SubscriptionComponent"
// import Subscription from "./Pages/Subscription"
import AddPropertyForm from "./Pages/AddPropertyForm"
import SubscriptionForm from "./Pages/SubscriptionForm"

import Login from "./Login"
import Signup from "./Signup"

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
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/subscription" element={<SubscriptionForm />} />
          <Route path="/addproperty" element={<AddPropertyForm />} />
          {/* <Route path="/auth" element={<AuthPage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
