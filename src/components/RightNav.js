import React from 'react'
import Contact from '../pages/Contact'

export default function RightNav() {
  return (
    <div className="rightNav">
      <div className= "options"><a href="/"
      >home</a></div>
      
      <div className= "options"><a href="/contact">contact</a></div>
      <div className= "options"><a href="/about">About</a></div>
    </div>
  )
}
