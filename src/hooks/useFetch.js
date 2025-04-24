import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetch'
import { useLocalStorage } from 'usehooks-ts'

const useFetch = ({url, method = 'GET', body = null}) => {
  const [data, setData] = useLocalStorage('localData', {})

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData(
      url,
      method,
      body,
      (data) => {
        setLoading(false)
        setData(data)
      },
      (err) => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  return {
    data,
    loading,
    error,
  }
}

export default useFetch
