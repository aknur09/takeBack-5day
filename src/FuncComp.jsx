import React, { useState } from 'react'

const FuncComp = (props) => {
 const [count , setCount]=useState(5);
 const [status , setStatus]=useState('');

 const plus=()=>{
  setCount((count) => count +1)
 };

 const minus=()=>{
  setCount((count) => count -1)
 };

  return (
    <div>
    <h2>Function Component</h2>
    <h1>{count}</h1>
    <button className='btn btn-outline-danger' onClick={plus}>+</button>
    <button className='btn btn-outline-primary' onClick={minus}>-</button>
    <button className='btn btn-outline-info' onClick={props.onKill}>kill</button>
  </div>
  )
}

export default FuncComp