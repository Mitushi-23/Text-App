import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
}
 from "react-router-dom";



export default function Navbar(props) {
    return (
      <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'|| props.mode==='blue-dark'? 'light' : 'dark'} bg-${props.mode==='light'|| props.mode==='blue-dark'? 'light':'dark' }`}>

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.abouttext}</Link>
        </li>
      </ul>
      <div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'|| props.mode==='blue-dark'? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enabel {props.mode==='light'?'dark':'light'} Mode</label>
</div>
<div className="form-check form-switch mx-2">
  <input className="form-check-input" onClick={props.toggleModeBlue} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'|| props.mode==='blue-dark'? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enabel {(props.mode==='blue-light' || props.mode==='light' || props.mode ==='dark')?'light blue':'dark blue'} Mode</label>
</div>
    </div>
  </div>
</nav>

</>
    );
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    abouttext : PropTypes.string.isRequired
                  }

Navbar.defaultProps = {
                      title: "set title here",
                      abouttext: "About"
}