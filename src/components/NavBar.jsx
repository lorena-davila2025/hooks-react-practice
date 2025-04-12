import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const NavBar = () => {
  const { user } = useContext(UserContext)

  const isUserEmpty = !user || Object.keys(user).length === 0

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${isUserEmpty ? 'disabled' : ''}`}>
            <li className="nav-item">
              <NavLink to="/" className={`nav-link ${isUserEmpty ? 'disabled' : ''}`} tabIndex={isUserEmpty ? -1 : 0}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={`nav-link ${isUserEmpty ? 'disabled' : ''}`} tabIndex={isUserEmpty ? -1 : 0}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={`nav-link ${isUserEmpty ? 'disabled' : ''}`} tabIndex={isUserEmpty ? -1 : 0}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
