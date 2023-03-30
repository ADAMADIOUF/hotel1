import React, { useEffect, useState } from 'react'
import { social, links } from '../dataNav'
import logo from "../assets/hotellogo.png"
import{FaBars} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const Navbar = () => {
  
  
  const{ openSidebar}=useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to={`/`}>
            <img src={logo} alt='' className='logo' />
          </Link>
          <button className='btn-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { url, text, id } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
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
      </div>
    </nav>
  )
}

export default Navbar