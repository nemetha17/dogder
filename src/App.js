import React, {useEffect, useState } from "react";
import {Redirect, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Dogder from './Dogder'
import Saved from './Saved'
import Header from './Header'



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
    <Header />
    <Switch>
    <Route exact path="/">
      <Dogder 
      images = {images}
      save = {save}
      saved = {saved}
      next = {next}
      remove ={remove}
      />
    </Route>
    <Route path="/saved">
      <Saved 
      remove={remove}
      saved = {saved}
      />
    </Route>
    <Redirect path ="*" to="/" />
    </Switch>
  </div>
)

}

export default App;
