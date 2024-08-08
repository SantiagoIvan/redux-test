import React from 'react'
import useUser from '../hooks/useUser'

const Read = () => {
  const {name, age, email, friends } = useUser()
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
      <p>Amigos:</p>
      <ul>
        {friends.map((friend, id) => 
          <li key={id}>{friend}</li>
        )}
      </ul>
    </div>
  )
}

export default Read