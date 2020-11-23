import React from "react"

const Saved = ({saved,remove}) => {
    return(
    <ul>
      {saved.map((image) =>(
        <li key={image.message}>
          {image.message}
          <button onClick={() => remove(image)}>x</button>
        </li>
      ))}
    </ul>
    )
}

export default Saved