import React from "react"
import Button from"./Button"


const Dogder = ({images,save,saved,next,remove }) => {
    return(
    <div>
    <h1>Dogder</h1>
    <img src={images.message} alt={images.message} style={{ width: 400}} />
    <br />
    {saved.includes(images) ? (
          <Button
            color={saved.includes(images) ? "red" : "green"}
            onClick={() => remove(images)}
          >
            Unsave
          </Button>
        ) : (
          <Button
            onClick={() => save(images)}
            color={saved.includes(images) ? "red" : "green"}
          >
            Save
          </Button>
        )}
    <button onClick={next}>Next</button>
    </div>
    )
}

export default Dogder