import React, { useRef } from 'react'
import useForm from '../hooks/useForm'

const FormApp = () => {

  const { formState, handleInputChange, handleSubmit, handleReset } = useForm({
    initialState: {
      email: '',
      password: '',
      check: false
    }
  })

  const { email, password, check } = formState

  const focusRef = useRef()

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input
          ref={focusRef}
          type="email"
          name="email"
          value={email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
          />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleInputChange}
          />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="check"
          value={check}
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleInputChange}
          />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      <button type="reset" className="btn btn-danger" onClick={handleReset}>Reset</button>
    </form>
  )
}

export default FormApp
