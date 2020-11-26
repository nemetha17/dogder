import React from "react"
import {useSaved} from "./hooks/useSaved"
import useLocalStorage from "./hooks/useLocalStorage"
import {initialState ,reducer} from "./reducers/savedReducer"


const Saved = ({remove}) => {
  const {saved, unsave, clear} = useSaved();
  const {values,setValue, deleteValue, clearLocalStorage} = useLocalStorage ("saved",initialState)
    
  
  return(
    <div>   
    <ul>
      {saved.map((image) =>(
        <li key={image.message}>
          {image.message}
          <button onClick={() => unsave(image)}>unsave</button>
        </li>
      ))}
    </ul>
    <button onClick={clear}>clear</button> 
    </div>
    )
}

export default Saved