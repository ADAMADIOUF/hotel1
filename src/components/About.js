import React from 'react'
import ac1 from '../assets/ac1.png'
import Review from './Review'
const About = () => {
  return (
    <div className='about'>
      <div className='section-center'>
        <div className='title'>
          <h3>about our casa</h3>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          ipsum doloribus dolorum illo optio non magnam facilis labore eveniet
          nulla, dolore, dicta laboriosam nesciunt vitae modi, quas animi.
          Doloremque, quas.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          quasi, saepe voluptates non assumenda culpa optio alias, veniam
          blanditiis soluta consequatur obcaecati ab laboriosam exercitationem,
          dolorum pariatur repellendus. Blanditiis, illum.
        </p>
        <img
          src='https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt='' className='about-img'
        />
        <div className='activities-line'>
          <img src={ac1} alt='' srcset='' />
        </div>
        <div className='activities-dote'>
          <img src={ac1} alt='' srcset='' />
        </div>
      </div>
      <Review/>
    </div>
  )
}

export default About