import React from 'react'
import Nevbar from '../Component/Nevbar'
import Course from '../Component/Course'
import Footer from '../Component/footer'
import list from "../../public/list.json"

function Courses() {
    console.log(list);
  return (
      <>
          <Nevbar />
          <div className='min-h-screen'>
          <Course />
          </div>
          <Footer />
      </>
  )
}

export default Courses
