import { useState } from 'react'

const useForm = ({initialState = {}}) => {
  const [formState, setFormState] = useState(initialState)

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);

    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  const handleReset = () => {
    setFormState({
      email: '',
      password: ''
    })
  }

  return {
    formState,
    handleInputChange,
    handleSubmit,
    handleReset
  }
}

export default useForm
