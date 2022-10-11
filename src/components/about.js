import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import devPic from './devPic.jpg';
import './about.css'
export const About = () => {

  return (
    <div class="infoContainer text-left ml-5">
                <div class="devInfo">
                    <div class="hello">Hi I am </div>
                    <div class="name">Zeeshan Ali </div>
                    <div class="about">Web Developer , Enterpreneur , learner</div>
                    <div class="moreAbout">I am a web developer who has a skill to develop extensive websites including functionality. You can contact me through</div>
                    <div class="icons">
                        <a href="mailto:zeeshanali902332gmail.com" target="_blank" rel="noopener noreferrer" className='email'><MdEmail size="30px" color="#EA4335"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100037013343034" target="_blank" rel="noopener noreferrer" className='facebook'>{<BsFacebook size="30px" />}</a>
                        <a href="https://instagram.com/zeeshanali90233?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className='instagram'>{<FaInstagramSquare size="30px" color='#E4405F'/>}</a>
                        <a href="https://github.com/zeeshanali90233" target="_blank"rel="noopener noreferrer"  className='github'>{<AiFillGithub size="30px" color='black'/>}</a>
                    </div>
                
                </div>
                <div class=" devImg mt-5">
                    <img src={devPic} alt=""/>
                </div>
            </div>
  )
}
