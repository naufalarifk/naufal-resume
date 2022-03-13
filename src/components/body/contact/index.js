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
        <a download href='https://hpoxfrhwcnbhztpnmgcv.supabase.in/storage/v1/object/sign/resumedl/resume.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyZXN1bWVkbC9yZXN1bWUucGRmIiwiaWF0IjoxNjQ3MTgyNzY0LCJleHAiOjE5NjI1NDI3NjR9.bhkX0_bhPVj4tcz669A9XgX-_X354x0cBNR_YpZbCIc'>
          <img alt='download' src= {resumedl}/>
          Download Resume
        </a>
      </div>
    </div>
    </div>
  )
}

export default Contact