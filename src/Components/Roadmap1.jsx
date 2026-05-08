import React from 'react'
import '../Css/roadmap2.css'
import bg from '../Assets/background.png';
const Roadmap1 = () => {
  return (
    <>
         <div  id="backcover"style={{ backgroundImage: `url(${bg})` }}>
            <div className="container" id='roadmap'></div>
        </div>
    </>
  )
}

export default Roadmap1