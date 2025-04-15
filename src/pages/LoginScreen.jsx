import React, { useContext } from 'react'
import useForm from '../hooks/useForm'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router'

const LoginScreen = () => {
  const navigate = useNavigate()
  const INITIAL_FORM = {
    name: '',
    technology: '',
    email: ''
  }

  const { formState: { name, technology, email }, handleInputChange, handleReset } = useForm({ initialState: INITIAL_FORM })
  const { setUser } = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted:', { name, technology, email });

    if (name.trim() === '' || technology.trim() === '' || email.trim() === '') {
      alert('Please fill all the fields')
      return
    }
    setUser({ name, technology, email })
    handleReset()
    navigate('/')
  }

  return (
    <form className="vh-100 m-5 mt-2 p-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          id="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="technology" className="form-label">Technology:</label>
        <input
          type="text"
          name="technology"
          value={technology}
          className="form-control"
          id="technology"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address:</label>
        <input
          type="email"
          name="email"
          value={email}
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
        />
        <div id="emailHelp" className="form-text">Personal email</div>
      </div>
      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default LoginScreen
