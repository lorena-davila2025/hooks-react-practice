import { useState, ChangeEvent, FormEvent } from 'react'
import { fetchData } from '../utils/fetch'

type FormState = Record<string, string | boolean> | {} // This can hold string or boolean for checkboxes
type SuccessCallback = (data: any) => void
type ErrorCallback = (err: any) => void

interface UseFormProps {
  initialState?: FormState
}

const useForm = ({ initialState = {} }: UseFormProps) => {
  const [formState, setFormState] = useState<FormState>(initialState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    url: string,
    successCallback?: SuccessCallback,
    errorCallback?: ErrorCallback
  ) => {
    e.preventDefault()
    fetchData(
      url,
      'POST',
      formState,
      (data) => {
        console.log('✅', data)
        setFormState(formState => ({ ...formState, result: data }))
        if (successCallback) {
          successCallback(data)
        }
      },
      (err) => {
        console.log('❌', err)
        if (errorCallback) {
          errorCallback(err)
        }
      }
    )

    handleReset(() => { console.log('Form reset') })
  }

  const handleReset = (resetCallback: () => void = () => {}) => {
    const newFormState = Object.keys(formState).reduce((acc: FormState, key) => {
      acc[key] = ''
      return acc
    }, {})
    setFormState(newFormState)
    if (resetCallback) {
      resetCallback()
    }
  }

  return {
    formState,
    handleInputChange,
    handleSubmit,
    handleReset
  }
}

export default useForm
