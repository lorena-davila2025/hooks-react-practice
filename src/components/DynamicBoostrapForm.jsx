import React from 'react'
import useForm from '../hooks/useForm'
import PropTypes from 'prop-types'

const DynamicBootstrapForm = ({fields, buildUrl, formButtons }) => {

  const { formState, handleInputChange, handleSubmit, handleReset } = useForm({})
  const url = buildUrl(formState)

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
        <button type={'submit'} className={'btn btn-primary'}>{formButtons?.submitText || 'Submit'}</button>
        <button type={'reset'} className={'btn btn-danger'} onClick={() => handleReset(formButtons?.resetCallback)}>Reset</button>
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
  buildUrl: PropTypes.func.isRequired, // Function that takes formState as optional parameter and returns a string
  formButtons: PropTypes.shape({
    submitText: PropTypes.string,
    resetCallback: PropTypes.function
  })
}

DynamicBootstrapForm.defaultProps = {
  formButtons: {
    submitText: 'Submit',
    resetCallback: () => {}
  }
}

export default DynamicBootstrapForm
