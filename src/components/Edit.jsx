import React, { useRef } from 'react'
import useUser from '../hooks/useUser'

const Edit = () => {
  const { name, age, email, friends, setName, setAge, setEmail, addFriend, removeFriend } = useUser()
  const nameRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()
  const newFriendRef = useRef()

  const modifyName = () => {
    setName(nameRef.current.value)
  }
  const modifyAge = () => {
    setAge(ageRef.current.value)
  }
  const modifyEmail = () => {
    setEmail(emailRef.current.value)
  }
  const deleteFriend = (target) => {
    removeFriend(target)
  }
  const agregarAmigo = () => {
    addFriend(newFriendRef.current.value)
    newFriendRef.current.value = ""
  }

  return (
    <div>
      <h1>Modificar usuario: </h1>
      <label htmlFor="name">Nombre</label>
      <input type="text" name="name" id="name" defaultValue={name} ref={nameRef}/>
      <button type="submit" onClick={modifyName}>Modificar</button>

      <label htmlFor="age">Edad</label>
      <input type="number" name="age" id="age" defaultValue={age} ref={ageRef}/>
      <button type="submit" onClick={modifyAge}>Modificar</button>

      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" id="email" defaultValue={email} ref={emailRef}/>
      <button type="submit" onClick={modifyEmail}>Modificar</button>

      <label htmlFor="friends">Amiguitos</label>
      <ul>
        {friends.map((friend, id) => 
          <li key={"friend-"+id}>
            <p>{friend}</p>
            <button id={"delete-btn-"+id} onClick={() => deleteFriend(friend)}>Borrar</button>
          </li>
        )}
      </ul>
      <label htmlFor="newFriend">Nuevo amigo</label>
      <input type="newFriend" name="newFriend" id="newFriend" ref={newFriendRef}/>
      <button onClick={agregarAmigo}>Agregar Amigo</button>
      <p>{`(pude haber hecho un solo boton de submit pero es solo para jugar con redux)`}</p>
        
    </div>
  )
}

export default Edit