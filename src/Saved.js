import React, { useState } from "react";
import {useSaved} from "./hooks/useSaved"
import useLocalStorage from "./hooks/useLocalStorage"
import {initialState ,reducer} from "./reducers/savedReducer"
import UnSaveButton from "./UnSaveButton"
import SavedImage from "./components/saved/SavedImage"
import { css } from "styled-components/macro"
import axios from 'axios'
import Link from "./Link"



const Saved = () => {
  const {saved, unsave, clear, reload} = useSaved();
  const {values} = useLocalStorage ("saved",initialState)

  const check= () =>{
    if(values.length > 0) {
    if(!saved.length >0){
        {values.map((image) =>(
          reload(image)
        ))}
      }
    }
  }



  
  return(  
    <div
    css={css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    `}>  
    <ul >
      {saved.map((image) =>(
        <li  key={image.message} >
          <SavedImage url={image.message} />
          <UnSaveButton  onClick={() => unsave(image) }>unsave</UnSaveButton>
        </li>
      ))}
      </ul>
    <UnSaveButton onClick={clear}>clear</UnSaveButton> 
    <UnSaveButton onClick={check} >reload</UnSaveButton> 
    </div>
    )
}

export default Saved