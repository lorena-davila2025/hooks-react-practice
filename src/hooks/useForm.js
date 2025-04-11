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

  const handleSubmit = (e, url) => {
    e.preventDefault()
    fetchData(
      url,
      'POST',
      formState,
      (data) => {
        console.log('✅', data);
        const updatedUsers = JSON.parse(localStorage.getItem('users')) || []
        updatedUsers.push({...formState, ...data})
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        // setLoading(false)
        // setData(data)
      },
      (err) => {
        console.log('❌', err);
        // setLoading(false)
        // setError(err.message)
      })
  }

  const handleReset = () => {
    const newFormState = Object.keys(formState).reduce((acc, key) => {
      acc[key] = ''
      return acc
    }, {})
    setFormState(newFormState)
  }

  return {
    formState,
    handleInputChange,
    handleSubmit,
    handleReset
  }
}

export default useForm
