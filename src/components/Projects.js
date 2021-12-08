import React from 'react'

export default function Projects(props) {
  return (
  <div className="projects">
    <a href={props.href}><h2>{props.title}</h2></a>
    <img src={props.src} alt= "project_image"/>
  </div>
  )
}
