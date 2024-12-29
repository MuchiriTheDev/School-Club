import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Hackathon from './Pages/Hackathon'
import Resources from './Pages/Resources'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Registration from './Pages/Registration'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
const App = () => {

  return (
    <>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/hackathon' element={<Hackathon/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/profile/:userId' element={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/auth/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App