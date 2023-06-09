import React from 'react'
import logo from '../assets/hotellogo.png'
import { FaTimes } from 'react-icons/fa'
import { links } from '../dataNav'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const { isSidebarOpen ,closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'sidebar showSidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <Link to={`/`}>
          <img src={logo} alt='' className='logo' onClick={closeSidebar} />
        </Link>
        <button className='close' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='sidebar-links'>
        {links.map((link) => {
          const { url, text, id } = link
          return (
            <li key={id} onClick={closeSidebar}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar