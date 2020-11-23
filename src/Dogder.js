import React from "react"


const Dogder = ({images,save,saved,next }) => {
    return(
    <div>
    <h1>Dogder</h1>
    <img src={images.message} alt={images.message} style={{ width: 400}} />
    <br />
    <button onClick={() => save(images) }>{saved.includes(images)?'Unsave':'Save'}</button>
    <button onClick={next}>Next</button>
    </div>
    )
}

export default Dogder