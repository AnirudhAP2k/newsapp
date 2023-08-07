import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  let
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">NewsCounter</Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active  text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-light" aria-current="page" to="/about" >About</Link>
              </li>
              <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">General</Link></li>
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                  </ul>
              </li>
            </ul>
            
            {/* <div className={`form-check form-switch text-${props.mode==="light"?"grey":"light"} me-auto mb-1 mb-lg-0`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className = "form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div> */}
            </div>
      </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
