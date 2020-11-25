import React, {createContext, useReducer} from 'react';
import {initialState ,reducer} from "../reducers/savedReducer"


export const SavedContext = createContext();

export const SavedProvider = (props) =>{
    const [saved,dispatch] = useReducer(reducer, initialState)

    const add = (image) =>{
        dispatch({ type:"add", payload: image});
    }

    const unsave =(i) =>{
        dispatch({type:"remove", payload: i});
    }

    const clear = () =>{
        dispatch({type:"clear"});
    }

    


    return <SavedContext.Provider value={{saved, add, unsave, clear }} {...props} />
}