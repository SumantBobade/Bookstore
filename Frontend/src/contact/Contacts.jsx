import React from 'react'
import Contact from '../Component/Contact'
import Nevbar from '../Component/Nevbar'
import Footer from '../Component/footer'

function Contacts() {
  return (
    <>
    <Nevbar />
    <div className='min-h-screen'>
    <Contact />
    </div>
    <Footer />
</>
  )
}

export default Contacts
