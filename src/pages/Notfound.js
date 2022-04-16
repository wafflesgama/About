import React from 'react'
import { useNavigate } from 'react-router-dom';
function Notfound() {
  let navigate=useNavigate();
  return (
    <div className='notfound-cont-container '>
      <div className='notfound-container'>
        {/* <div className='notfound-back'></div> */}
        <div className='notfound animate__animated animate__fadeInUp'></div>
      </div>
        <h1>404 - Page not Found</h1>
        <p>The page you are looking for might have a different URL or has been removed</p>
        <button onClick={()=> navigate('/About')}>Return to home</button>
    </div>
  )
}

export default Notfound