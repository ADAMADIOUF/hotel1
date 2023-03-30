import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/hotellogo.png"
import { social } from '../dataNav'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='section-center'>
        <div className='footer-container'>
          <article className='footer-logo'>
            <img src={logo} alt='' className='logo' />
          </article>
          <article className='footer-details'>
            <p>500 terry francine street san francisco,CA 97876</p>
            <p>info@hotel.com</p>
          </article>
          <article className='footer-number'>
            <p>tel:1234567890</p>
            <p>fax:1234567542</p>
          </article>
          <article className='footer-link'>
            <ul className='social-icons'>
              {social.map((link) => {
                const { id, url, icon } = link
                return (
                  <li key={id}>
                    <Link to={url}>{icon}</Link>
                  </li>
                )
              })}
            </ul>
          </article>
        </div>
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span> by adamadiouf2017@gmail.com</span>
        </h5>
      </div>
    </div>
  )
}

export default Footer