import { useState } from 'react'
import { fetchData } from '../utils/fetch'

const useForm = ({initialState = {}}) => {
  const [formState, setFormState] = useState(initialState)

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }

  const handleSubmit = (e, url, successCallback, errorCallback) => {
    e.preventDefault()
    fetchData(
      url,
      'POST',
      formState,
      (data) => {
        console.log('✅', data);
        setFormState(formState => ({...formState, result: data}) )
        if(successCallback) {
          successCallback(data)
        }
      },
      (err) => {
        console.log('❌', err);
        if(errorCallback) {
          errorCallback(err)
        }
      })

    handleReset(() => { console.log('Form reset') })
  }

  const handleReset = (resetCallback = function () {}) => {
    const newFormState = Object.keys(formState).reduce((acc, key) => {
      acc[key] = ''
      return acc
    }, {})
    setFormState(newFormState)
    if(resetCallback) {
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
