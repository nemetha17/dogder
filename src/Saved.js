import React from "react"
import {useSaved} from "./hooks/useSaved"
import useLocalStorage from "./hooks/useLocalStorage"
import {initialState ,reducer} from "./reducers/savedReducer"
import UnSaveButton from "./UnSaveButton"


const Saved = () => {
  const {saved, unsave, clear, add, reload} = useSaved();
  const {values,setValue, deleteValue, clearLocalStorage} = useLocalStorage ("saved",initialState)

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
    <div>  
    <ul>
      {saved.map((image) =>(
        <li key={image.message}>
          {image.message}
          <UnSaveButton onClick={() => unsave(image)}>unsave</UnSaveButton>
        </li>
      ))}
    </ul>
    <UnSaveButton onClick={clear}>clear</UnSaveButton> 
    <UnSaveButton onClick={check}>reload</UnSaveButton> 
    </div>
    )
}

export default Saved