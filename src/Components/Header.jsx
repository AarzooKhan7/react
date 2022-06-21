import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (

    <div className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>


            <li className="nav-item">
              <Link to="/converter" className="nav-link">Converter</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/notes" className="nav-link">Notes</Link>
            </li>


            
            <li className="nav-item">
              <Link to="/time" className="nav-link">Time</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>


            

            <li className="nav-item">
              <Link to="/form" className="nav-link">Form</Link>
            </li>

            <li className="nav-item">
              <Link to="/classes" className="nav-link">Class Based</Link>
            </li>



            
          </ul>
          
        </div>
      </div>
    </div>








  )
}