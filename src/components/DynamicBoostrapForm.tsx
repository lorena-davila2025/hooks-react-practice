import React, {FC} from 'react'
import useForm from '../hooks/useForm'

type Field = {
  name: string
  label: string
  type: string
}

type FormButtons = {
  submitText?: string
  resetCallback?: () => void
}

type FormState = Record<string, string> | {}

type Props = {
  fields: Field[]
  buildUrl: (formState: FormState) => string
  formButtons?: FormButtons
}

const DynamicBootstrapForm: FC<Props> = ({ fields, buildUrl, formButtons = {} }) => {
  const { formState, handleInputChange, handleSubmit, handleReset } = useForm({})
  const url = buildUrl(formState)
  const formKeys = Object.keys(formState)

  const isFormValid = fields.every(field => {
    const currentField = field.name.toLowerCase()
    return formKeys.includes(currentField) && formState[currentField] !== ''
  })
  const isFormResetable = formKeys.length > 0 &&
  formKeys.some(key => fields.find(field => field.name.toLowerCase() === key) && formState[key] !== '')

  return (
    <form onSubmit={(e) => handleSubmit(e, url)}>
      {fields.map((field) => (
        <div className={'mb-3'} key={field.name}>
          <label htmlFor={field.name} className={'form-label'}>
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formState[field.name] || ''}
            className={'form-control'}
            id={field.name}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <div className={'d-flex gap-2'}>
        <button
          type={'submit'}
          className={`btn btn-primary ${isFormValid ? '' : 'disabled'}`}
        >
          {formButtons.submitText || 'Submit'}
        </button>
        <button
          type={'reset'}
          className={`btn btn-danger ${isFormResetable ? '' : 'disabled'}`}
          onClick={() => handleReset(formButtons.resetCallback)}
        >
          Reset
        </button>
      </div>
    </form>
  )
}

export default DynamicBootstrapForm
