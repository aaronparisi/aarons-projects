import React from 'react'

const ProjectDisplay = ({ projTitle, imageUrl, pageUrl, gitUrl, description, techs }) => {

  const projectWebsite = () => {
    if (pageUrl) {
      return <a href={pageUrl} target="_blank"><img className="link-icon" src="./icons/external-link.png" alt="external link icon"/></a>
    } else {
      return (
        <div className="tooltip link-icon">
          <img src="./icons/construction.png" alt="under construction" />
          <div className="tooltip-text">Under Construction</div>
        </div>
      )
    }
  }

  return (
    <div className="project-display">
      <div className="project-thumbnail">
        <img className="thumbnail-image" src={imageUrl} alt={`web app thumbnail for ${projTitle}`}/>
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
          {projectWebsite()}
          <a href={gitUrl} target="_blank"><img className="link-icon" src="./icons/github.png" alt="github icon"/></a>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay