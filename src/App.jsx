import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Friend from './Friend';

function App() {
  
  function handleClick() {
   alert('Handle Click');
  }
  const handleClick2 =()=>{
    alert('handleClick 2')
  }

  return (
    <>
     
         
      <h1> Using handle click function in React</h1>
      <Friends></Friends>
      <Users> </Users>
      <Counter></Counter>

    <button onClick={handleClick}>Click Me !</button>
    <button onClick={handleClick2}>Click Me 2 !</button>
      
    </>
  )
}

export default App
