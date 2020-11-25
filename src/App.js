import React, {useEffect, useReducer, useState } from "react";
import {Redirect, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import {reducer} from "./reducers/savedReducer"
import Dogder from './Dogder'
import Saved from './Saved'
import Header from './Header'
import { SavedProvider } from "./utils/SavedContext";


const App = () => {
  const [images, setImages] = useState([])
  const [loaded, setLoaded] = useState(false)

const next = async () =>{
  const resp = await axios("https://dog.ceo/api/breeds/image/random")
  setImages(resp.data);
}

const [state, dispatch]= useReducer(reducer, [])


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
  <SavedProvider> 
    <Header />
    <Switch>
    <Route exact path="/">
      <Dogder 
      images = {images}
      next = {next}      
      />
    </Route>
    <Route path="/saved">
      <Saved 
      />
    </Route>
    <Redirect path ="*" to="/" />
    </Switch>
  </SavedProvider>
)

}

export default App;
