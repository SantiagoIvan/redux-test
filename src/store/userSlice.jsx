import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        age: 0,
        email: "",
        friends: []
    },
    reducers:{
        setName: (state, action) => {
            state.name = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        addFriend: (state, action) => {
            state.friends.push(action.payload)
        },
        removeFriend: (state, action) => {
            state.friends = state.friends.filter(friend => friend != action.payload)
        }
    }
})

export const { setName, setAge, setEmail, addFriend, removeFriend } = userSlice.actions;