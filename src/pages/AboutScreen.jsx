import React from 'react'
import gif from '../assets/friday-is-it-friday-yet.gif'

const AboutScreen = () => {
  return (
    <div className="container m-auto mt-5">
      <img
        src={gif}
        className="img-fluid w-95 h-auto"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        alt="Is it Friday yet?"
      />
    </div>
  )
}

export default AboutScreen
