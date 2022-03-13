import React from 'react';
import { editalt, laptop, person, briefcase } from '../../../assets';
import './mobile.css'
const Mobile = ({isOpen, setIsOpen}) => {
  return (
  <div className='mobile'>
<div className='close-icon' onClick={()=> setIsOpen(!isOpen)}>
<i class="fi fi-rr-cross-circle"></i>
</div>
<div className='mobile-options'>
<div className='mobile-option'>
      <a href='#project'>
      <img src={editalt} className="option-icon" alt='projects'/>Projects
      </a>
      
      </div> 

          <div className='mobile-option'>
      <a href='#skills'>
      <img src={laptop} className="option-icon" alt='skill'/>Skill
      </a>
      
      </div>  

      {/*<div className='mobile-option'>
      <a href='#work'>
      <img src={briefcase} className="option-icon" alt='work' />Work
      </a>
      
  </div> */} 

      <div className='mobile-option'>
      <a href='#contact'>
      <img src={person} className="option-icon" alt="contact"/>Contact  
      </a>
      
      </div>  

</div>
</div>)
};

export default Mobile;
