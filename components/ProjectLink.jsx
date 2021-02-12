import React from 'react'

const ProjectLink = ({ projTitle, imageUrl, url }) => {
  return (
    <div className="project-link">
      <h2>{projTitle}</h2>
      <a href={url}><img class="project-thumbnail" src={imageUrl} alt={`web app thumbnail for ${projTitle}`}/></a>
    </div>
  )
}

export default ProjectLink