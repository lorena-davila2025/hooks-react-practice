import { useEffect, useState } from 'react'

const useFetch = ({url}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
      fetch(url).then(res => {
          if(!res.ok) {
            throw new Error('Error fetching data')
          }
          // console.log('Fetching data...', res.json());
          return res.json()
        }).then(data => {
          setUsers(data)
          setLoading(false)
        }).catch(err => {
          console.log('no al hacking', err);
          setError(err.message)
          setLoading(false)
        })
    }, [url])

  return {
    users,
    loading,
    error,
  }
}

export default useFetch
