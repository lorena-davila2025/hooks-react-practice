import React from 'react'
import useForm from '../hooks/useForm'
import PropTypes from 'prop-types'

const DynamicBootstrapForm = ({fields, url }) => {

  const { formState, handleInputChange, handleSubmit, handleReset } = useForm({})

  return (
    <form onSubmit={(e) => handleSubmit(e, url)}>
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
      <div className='d-flex gap-2'>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-danger" onClick={handleReset}>Reset</button>
      </div>
    </form>
  )
}

DynamicBootstrapForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,
  url: PropTypes.string.isRequired
}

export default DynamicBootstrapForm
