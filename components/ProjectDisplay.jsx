import React from 'react'

const ProjectDisplay = ({ projTitle, imageUrl, pageUrl, gitUrl, description, techs }) => {
  return (
    <div className="project-display">
      <div className="project-thumbnail">
        <img src={imageUrl} alt={`web app thumbnail for ${projTitle}`}/>
      </div>
      
      <div className="project-info">
        <h2 className="project-title">{projTitle}</h2>

        <div className="project-details">
          <p className="project-description">
            {description}
          </p>
          
          <p className="techs">
            {techs.join(" | ")}
          </p>
        </div>

        <div className="product-links">
          <a href={pageUrl} target="_blank"><img className="link-icon" src="./icons/external-link.png" alt="external link icon"/></a>
          <a href={gitUrl} target="_blank"><img className="link-icon" src="./icons/github.png" alt="github icon"/></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay