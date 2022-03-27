import React from 'react'
import './contact.css'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import { resumedl } from '../../../assets/'
const Contact = () => {
  return (
    <div className='contact'>
    <Separator/>
    <label className='section-title'>Contact</label>
    <div className='contact-container'>
      <div className='contact-left'>
        <p>if you want to keep in touch here are some contacts you can message me on</p>
      <SocialContact/>
      </div>
      <div className='download'>
        <a target='_blank' rel='noreferrer' download href='https://firebasestorage.googleapis.com/v0/b/resume-2df82.appspot.com/o/Resume%20Naufal%20Arif%20Kurniawan(1).pdf?alt=media&token=3034c593-90b3-44da-b038-c05ad3acc889'>
          <img alt='download' src= {resumedl}/>
          Download Resume
        </a>
      </div>
    </div>
    </div>
  )
}

export default Contact