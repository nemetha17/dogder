import React from "react"
import {useSaved} from "./hooks/useSaved"


const Saved = ({remove}) => {
  const {saved, unsave, clear} = useSaved();
    
  
  return(
    <div>   
      <ul>
      {saved.map((image) =>(
        <li key={image.message}>
          {image.message}
          <button onClick={() => unsave(image)}>x</button>
        </li>
      ))}
    </ul>
    <button onClick={clear}>clear</button> 
    </div>
    )
}

export default Saved