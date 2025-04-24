import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const NavBar = () => {
  const { user, setUser } = useContext(UserContext)

  const isUserEmpty = !user || Object.keys(user).length === 0

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button
          className="navbar-toggler"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className={`navbar-nav ${isUserEmpty ? 'disabled' : ''}`}>
            <NavLink
              to="/"
              className={`nav-link ${isUserEmpty ? 'disabled' : ''}`}
              aria-current="page"
              tabIndex={isUserEmpty ? -1 : 0}
              onClick={(e) => isUserEmpty && e.preventDefault()}
            >
                Home
            </NavLink>
            <NavLink
              to="/about"
              className={`nav-link ${isUserEmpty ? 'disabled' : ''}`}
              tabIndex={isUserEmpty ? -1 : 0}
              onClick={(e) => isUserEmpty && e.preventDefault()}
            >
                About
            </NavLink>
            <NavLink
              to="/contact"
              className={`nav-link ${isUserEmpty ? 'disabled' : ''}`}
              tabIndex={isUserEmpty ? -1 : 0}
              onClick={(e) => isUserEmpty && e.preventDefault()}
            >
                Contact
            </NavLink>
            {!isUserEmpty && (
              <button className="btn btn-link nav-link" onClick={() => setUser({})}>
                  Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
