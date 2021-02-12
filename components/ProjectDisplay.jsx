import React from 'react'

const ProjectDisplay = ({ projTitle, imageUrl, url, description, techs }) => {
  return (
    <div className="project-display">
      <div className="project-thumbnail">
        <a href={url}><img src={imageUrl} alt={`web app thumbnail for ${projTitle}`}/></a>
      </div>
      
      <div className="project-info">
        <h2>{projTitle}</h2>

        <div className="project-details">
          <p className="project-description">
            {description}
          </p>
          
          <p className="techs">
            {techs.join(" | ")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay