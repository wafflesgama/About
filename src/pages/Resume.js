import React from 'react'
import MiniEntry from '../components/MiniEntry'
import res from '../images/Resume.png'
function Resume() {
    return (
        <div className="container mt-3">
          
          <img className='resume' srcSet={res} width="100%" height="auto" alt="" />
        {/* <iframe src="https://github.com/wafflesgama/About/blob/react/src/images/Resume.pdf" width="100%" height="200px"></iframe> */}
        </div>
    )
}

export default Resume