import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

function Header() {
    return (
        <div className="summit-head">
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="col-md-1"></div>
            <div className="col-md-2 text-center">
              <img src="./images/summit-logo.jpg" height="130px" width="130px" alt="" />
            </div>
          <button className="navbar-toggler"style={{color:'black',backgroundColor:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
            <span style={{color:'black',backgroundColor:''}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#"><i class="fas fa-home"></i> Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Summit 2021
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="sdrop">
                  <li><a className="dropdown-item" href="#">About The Event</a></li>
                  <li><a className="dropdown-item" href="#">Program</a></li>
                  <li><a className="dropdown-item" href="#">FAQs</a></li>
                  <li><a className="dropdown-item" href="#">Organizing Committee</a></li>
                  <li><a className="dropdown-item" href="#">Advisory Body</a></li>
                  <li><a className="dropdown-item" href="#">Contact Us</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Agendas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Speakers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Partners</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Get Involved
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1" id="sdropg">
                  <li><a className="dropdown-item" href="#">Become a Partner</a></li>
                  <li><a className="dropdown-item" href="#">Become a Volunteer</a></li>
                  <li><a className="dropdown-item" href="#">Apply to Attend</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resource and Media
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1" id="rmdrop">
                  <li><a className="dropdown-item" href="#">Press Release</a></li>
                  <li><a className="dropdown-item" href="#">News Coverage</a></li>
                  <li><a className="dropdown-item" href="#">Speech/Videos</a></li>
                  <li><a className="dropdown-item" href="#">Gallery</a></li>
                  <li><a className="dropdown-item" href="#">Reports</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header
