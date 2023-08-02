import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand  text-light" href="/">NewsCounter</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active  text-light" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" aria-current="page" href="/about" >About</a>
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
