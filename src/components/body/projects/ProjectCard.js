import React from 'react'
import { githubicon, world } from '../../../assets'
import './ProjectCard.css'
const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <label className='project-title'>{project.title}</label>
      <div className='project-links'>
        {project.demo&& (
        <a className='project-link' href={project.demo} target="_blank" rel='noreferrer'>
          <div className='link-button'>
            <img src={world} alt="demo"/>Demo
          </div>
          </a>)}
          {project.github&&(
            <a className='project-link' href={project.github} target="_blank" rel='noreferrer'>
              <div className='link-button'>
                <img src={githubicon} alt="github"/>Github
              </div>
            </a>
          )}
      </div>
      <p>{project.about}</p>
      <div className='project-tags'>
        {project.tags.map((tag)=> {
          return(
            <label className='tag'>{tag}</label>
          )
        })}
      </div>
      </div>
      <img src={project.image} className='project-photo' alt='projects'/>
    </div>
  )
}

export default ProjectCard