import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setName as setNombre, setAge as setEdad, setEmail as setMail, addFriend as setNewFriend, removeFriend as deleteFriend} from '../store/userSlice'

const useUser = () => {
    // PARA DISPARAR ACCIONES DE CAMBIO DE ESTADO
    const dispatch = useDispatch()
    // GETTERS
    const name = useSelector(state => state.user.name); //user es el nombre del slice
    const age = useSelector(state => state.user.age);
    const email = useSelector(state => state.user.email);
    const friends = useSelector(state => state.user.friends);

    // SETTERS
    const setName = _name => dispatch(setNombre(_name))
    const setAge = _age => dispatch(setEdad(_age))
    const setEmail = _email => dispatch(setMail(_email))
    const addFriend = _friend => dispatch(setNewFriend(_friend))
    const removeFriend = _friend => dispatch(deleteFriend(_friend))

  return (
    {
        name,
        age,
        email,
        friends,
        setName,
        setAge,
        setEmail,
        addFriend,
        removeFriend
    }
  )
}

export default useUser