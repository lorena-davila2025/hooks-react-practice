import React, { useContext } from 'react'
import useForm from '../hooks/useForm'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router'

const LoginScreen = () => {
  const navigate = useNavigate()
  const INITIAL_FORM = {
    name: '',
    technology: '',
    email: '',
    city: '',
    country: ''
  }

  const { formState: { name, technology, email, city, country }, handleInputChange, handleReset } = useForm({ initialState: INITIAL_FORM })
  const { setUser } = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted:', { name, technology, email });

    if (name.trim() === '' || technology.trim() === '' || email.trim() === '') {
      alert('Please fill all the fields')
      return
    }
    setUser({ name, technology, email, city, country })
    handleReset()
    navigate('/')
  }

  return (
    <div className="container m-auto mt-5 vh-100 vw-100 ">
      <h2 className="text-center mb-4">Sign up</h2>
      <form className="vh-100 w-50 m-5 mt-2"  onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            id="name"
            placeholder="Regina Phalange"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City:</label>
          <input
            type="text"
            name="city"
            value={city}
            className="form-control"
            id="city"
            placeholder="Buenos Aires"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country:</label>
          <input
            type="text"
            name="country"
            value={country}
            className="form-control"
            id="country"
            placeholder="Argentina"
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
            placeholder="React, Rails, MySQL..."
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
            placeholder="phoebe@gmail.com"
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
    </div>
  )
}

export default LoginScreen
