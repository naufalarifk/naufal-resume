import React from 'react';
import { editalt, laptop, briefcase, person } from '../../../assets';
import './web.css'
const Web = () => {
  return (
  <div className='web'>
    <div className='web-option'>
      <a href='#project'>
      <img alt='editalt' src={editalt} className="option-icon"/>Projects
      </a>
      
      </div> 

          <div className='web-option'>
      <a href='#skills'>
      <img alt='laptop' src={laptop} className="option-icon"/>Skill
      </a>
      
      </div>  

      {/*<div className='web-option'>
      <a href='#work'>
      <img alt='briefcase' src={briefcase} className="option-icon"/>Work
      </a>
      
  </div>*/}  

      <div className='web-option'>
      <a href='#contact'>
      <img alt='person' src={person} className="option-icon"/>Contact  
      </a>
      
      </div>  

  </div>)
};

export default Web;
