import React from 'react'
import res from '../images/Resume.png'
function Resume() {
    return (
        <div className="resume container mt-3">
          
          <img className='resume' srcSet={res} width="100%" height="auto" alt="" />
        </div>
    )
}

export default Resume