import React, {useEffect, useState } from "react";
import axios from 'axios'


const App = () => {
  const [images, setImages] = useState([])
  const [loaded, setLoaded] = useState(false)
  const[saved, setSaved]= useState([])

const next = async () =>{
  const resp = await axios("https://dog.ceo/api/breeds/image/random")
  setImages(resp.data);
}

const save = image => {
  if(!saved.includes(image)) {
    setSaved([...saved,image])
  }
}

const remove =(i) =>{
  const remaining = saved.filter(image => image.message!== i.message)
  setSaved(remaining)
}




useEffect(()=>{
  const load = async () => {
      try {
        const resp = await axios("https://dog.ceo/api/breeds/image/random")
        setImages(resp.data);
        setLoaded(true)
      } catch(err){
        console.log(err)
      }
  }

  if(!loaded) {
    load()
  }

},[])

if (!loaded) {
  return "Loading..."
}

return (
  <div>
    {JSON.stringify(saved)}
    <h1>Dogder</h1>
    <img src={images.message} alt={images.message} style={{ width: 400}} />
    <br />
    <button onClick={() => save(images) }>{saved.includes(images)?'Unsave':'Save'}</button>
    <button onClick={next}>Next</button>


    <ul>
      {saved.map((image) =>(
        <li key={image.message}>
          {image.message}
          <button onClick={() => remove(image)}>x</button>
        </li>
      ))}
    </ul>
  </div>
)

}

export default App;
