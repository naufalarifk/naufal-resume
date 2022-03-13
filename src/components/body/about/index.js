import React, {Component} from 'react'
import './about.css'
import '../../../assets/coding.png'
import { coding } from '../../../assets'
import SocialContact from '../../common/social-contact'
const About = () => {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hi! my name is 
                <br/> <span className='info-name' >Naufal Arif Kurniawan</span>.
                <br/> I am a self-taught web developer currently learning Reactjs
            </div>
            <div className='about-photo'>
              <img src={coding} className='picture' alt='coding'/>
            </div>
        </div>
        <SocialContact/>
    </div>
  )
}

export default About