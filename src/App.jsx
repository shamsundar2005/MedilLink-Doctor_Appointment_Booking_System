import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import Myappointment from './pages/Myappointment'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/doctors' element={<Doctor/>}/>
        <Route path='/doctors/:speciality' element={<Doctor/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-appointment' element={<Myappointment/>}/>
        <Route path='/my-profile' element={<Myprofile/>}/>

      </Routes>
      <Footer />

    </div>
  )
}

export default App