import React from 'react'
import useFetch from '../hooks/useFetch'

const FetchApp = () => {
  const BASE_URL = 'http://jsonplaceholder.typicode.com/users'

  const { users, loading, error } = useFetch({url: BASE_URL})

  return (
    <>
      <h1>Users list</h1>
      <p>Fetch data from an API and display it.</p>
      {
        loading ?
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        :
        error ?
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        :
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>

            </tr>
          </thead>
          <tbody>
            {
              users?.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }
    </>
  )
}

export default FetchApp
