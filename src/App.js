
import './App.css';
import React,{useContext} from 'react'
import { Home } from './Home';
import context from './context';
import { Details } from './Details';


function App() {
  const {hide}= useContext(context)

  return (
    <>
    {!hide && <Home/>}
    <Details/>

    </>
  );
}

export default App;
