import React from 'react'

const ProjectLink = ({ projTitle, imageUrl }) => {
  return (
    <div className="project-link">
      <h2>{projTitle}</h2>
      <img class="project-thumbnail" src={imageUrl} alt={`web app thumbnail for ${projTitle}`}/>
    </div>
  )
}

export default ProjectLink