import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const ContactScreen = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="container vh-100 vw-100 d-flex flex-column align-items-center">
      <h1 className="my-5 text-center">This is an example of the useContext hook 🍀</h1>
      <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-header bg-primary text-white text-center">
          <h4>{user.name}</h4>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Location</h5>
          <p className="card-text">
            {user.city}, {user.country}
          </p>
          <h5 className="card-title">Technology</h5>
          <p className="card-text">{user.technology}</p>
          <a
            href={`mailto:${user.email}`}
            className="btn btn-primary"
          >
            Let's Talk
          </a>
        </div>
        <div className="card-footer text-muted text-center">
          BYO cookie!
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
