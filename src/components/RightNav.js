import React from 'react'
import Contact from '../pages/Contact'

export default function RightNav() {
  return (
    <div className="rightNav">
      <div className= "options"><a href="https://draftprotfolio.netlify.app"
      >home</a></div>
      
      <div className= "options"><a href="<Contact/>">contact</a></div>
      <div className= "options">About</div>
    </div>
  )
}
