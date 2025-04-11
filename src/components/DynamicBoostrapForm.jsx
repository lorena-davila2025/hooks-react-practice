import React from 'react'
import useForm from '../hooks/useForm'

const DynamicBootstrapForm = ({fields, url }) => {

  const { formState, handleInputChange, handleSubmit, handleReset } = useForm({})

  return (
    <form>
      {
        fields.map(field => (
          <div className="mb-3" key={field.name}>
            <label htmlFor={field.name} className="form-label">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formState[field.name]}
              className="form-control"
              id={field.name}
              onChange={handleInputChange}
            />
          </div>
        ))
      }
      <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e, url)}>Submit</button>
      <button type="reset" className="btn btn-danger" onClick={handleReset}>Reset</button>
    </form>
  )
}

export default DynamicBootstrapForm
