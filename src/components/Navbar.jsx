import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div>
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