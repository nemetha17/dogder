import React, {createContext, useReducer} from 'react';
import {initialState ,reducer} from "../reducers/savedReducer"
import useLocalStorage from "../hooks/useLocalStorage"


export const SavedContext = createContext();

export const SavedProvider = (props) =>{
    const [saved,dispatch] = useReducer(reducer, initialState)
    const {values,setValue, deleteValue, clearLocalStorage} = useLocalStorage ("saved",initialState)

    const add = (image) =>{
        setValue([...values, image])
        dispatch({ type:"add", payload: image});
    }

    const unsave =(i) =>{
        deleteValue(i)
        dispatch({type:"remove", payload: i});
    }

    const clear = () =>{
        clearLocalStorage()
        dispatch({type:"clear"});
    }

    


    return <SavedContext.Provider value={{saved, add, unsave, clear }} {...props} />
}