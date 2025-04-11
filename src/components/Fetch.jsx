import React from 'react'
import useFetch from '../hooks/useFetch'
import DynamicBootstrapForm from './DynamicBoostrapForm'

const Fetch = () => {
  const BASE_URL = 'http://jsonplaceholder.typicode.com/users'

  const { data, loading, error } = useFetch({url: BASE_URL})
  const users = data

  const FIELDS = [
    {name: 'name', label: 'Name', type: 'text'},
    {name: 'email', label: 'Email', type: 'email'},
    {name: 'username', label: 'Username', type: 'text'}
  ]

  return (
    <>
     <DynamicBootstrapForm
      fields={FIELDS}
      url={BASE_URL}
     />
     <div className='mt-5'>
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
     </div>
    </>
  )
}

export default Fetch
