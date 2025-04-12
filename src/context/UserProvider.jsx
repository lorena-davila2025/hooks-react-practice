import React, { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({children}) => {
const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={ {user, setUser, country: 'Argentina', city: 'Buenos Aires'} }>,
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
