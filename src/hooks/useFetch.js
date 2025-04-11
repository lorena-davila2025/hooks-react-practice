import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetch'

const useFetch = ({url, method = 'GET', body = null}) => {
    const [data, setData] = useState(() => {
      if(localStorage.getItem('users')) {
        return JSON.parse(localStorage.getItem('users'))
      }
      return []
    })
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
          localStorage.setItem('users', JSON.stringify(data))
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
