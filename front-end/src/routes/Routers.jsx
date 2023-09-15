import React from 'react'
import Home from '../pages/Doctors/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'
import Login from '../pages/Doctors/Login'
import Services from '../pages/Doctors/Services'
import Signup from '../pages/Doctors/Signup'
import Contact from '../pages/Doctors/Contact'
import { Routes,Route } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
    
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctorsdetails' element={<DoctorsDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>

    </Routes>
  )
}

export default Routers
