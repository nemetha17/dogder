import React, {createContext, useReducer} from 'react';
import {initialState ,reducer} from "../reducers/savedReducer"
import useLocalStorage from "../hooks/useLocalStorage"


export const SavedContext = createContext();

export const SavedProvider = (props) =>{
    const [saved,dispatch] = useReducer(reducer, initialState)
    const {values,setValue, deleteValue, clearLocalStorage} = useLocalStorage ("saved",initialState)

    const add = (image) =>{
        if (!values.includes(image)) {
            setValue([...values, image])
        }
        dispatch({ type:"add", payload: image});
    }
    const reload = (image) =>{
        dispatch({ type:"reload", payload: image});
    }

    const unsave =(i) =>{
        deleteValue(i)
        dispatch({type:"unsave", payload: i});
    }

    const clear = () =>{
        clearLocalStorage()
        dispatch({type:"clear"});
    }

    


    return <SavedContext.Provider value={{saved, add, unsave, clear, reload }} {...props} />
}