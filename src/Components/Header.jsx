import React from 'react'
import logo from '../Assets/logo.gif'
import '../Css/Header.css'

function Header() {
  return (
    <>

      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" >
        <div className="container">

          <img id='logo' src={logo} alt='noimage' width="10%" />
          <h2 style={{ color: "white" }}>SUKUYANA</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className=" item nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className=" item nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="#introduction">Introduction</a>
              </li>
              <li className="item nav-item pe-2">
                <a className="nav-link text-white" href="#tokenomics"> Tokenomics </a>
              </li>
              <li className="item nav-item pe-2">
                <a className="nav-link text-white" href='#roadmap'>Roadmap</a>
              </li>
              <li className="item nav-item pe-2" id='burn'>
                <a className="nav-link text-white" href='#back'>Burn</a>
              </li>
            </ul>
            <span>

              <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/13dbBXQ5hn_4ZPCX-v5zWQo4HoXqqYUX9/view?usp=sharing'>
              <button className='buybutton '> WHITEPAPER</button>  
               
              </a>
            </span>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Header


