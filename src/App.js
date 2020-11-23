import React, {useEffect, useState } from "react";
import axios from 'axios'


const App = () => {
  const [images, setImages] = useState([])
  const [loaded, SetLoaded] = useState(false)

const next = async () =>{
  const resp = await axios("https://dog.ceo/api/breeds/image/random")
  setImages(resp.data);
}




useEffect(()=>{
  const load = async () => {
      try {
        const resp = await axios("https://dog.ceo/api/breeds/image/random")
        setImages(resp.data);
      } catch(err){
        console.log(err)
      }
  }

  if(!loaded) {
    load()
  }

},[])


return (
  <div>
    <h1>Dogder</h1>
    <img src={images.message} alt={images.message} style={{ width: 400}} />
    <button onClick={next}>Next</button>
  </div>
)

}

export default App;
