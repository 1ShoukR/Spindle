import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='left-section'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className='right-section'>
        <ul>
          <li>
            <Link to="/create-account">Create Account</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar