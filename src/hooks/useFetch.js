import { useEffect, useState } from 'react'
import { fetchData } from '../utils/fetch'

const useFetch = ({url, method = 'GET', body = null}) => {
    const [data, setData] = useState([])
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
