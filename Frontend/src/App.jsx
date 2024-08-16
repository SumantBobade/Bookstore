import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'

import { Route, Routes } from "react-router-dom"
import Signup from './Component/Signup'
import Login from './Component/Login'
import Contact from './Component/Contact'

function App() {
  return (<>
    {/*<Home />
    <Course />*/}
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path='/course' element={<Courses />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  </>)
}

export default App
