import React from 'react'
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

  return (
    <form>
      <div class="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange}/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name="password" value={password} class="form-control" id="exampleInputPassword1" onChange={handleInputChange}/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" name="check" value={check} class="form-check-input" id="exampleCheck1" onChange={handleInputChange}/>
        <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      <button type="reset" class="btn btn-danger" onClick={handleReset}>Reset</button>
    </form>
  )
}

export default FormApp
