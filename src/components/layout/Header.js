import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll'


function Header() {
    return (

        <div className="summit-head mb-4 sticky-top">
        <nav className="navbar navbar-expand-lg" style={{top:'0'}} >
        <div className="container-fluid">
             <div className="col-md-2 text-center">
       <Link to="/"> <img src="./images/summit-logo-1.png" height="130px" width="130px" alt="" /> </Link>
            </div> 
          <button className="navbar-toggler"style={{color:'black',backgroundColor:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
            <span style={{color:'black',backgroundColor:''}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link " aria-current="page" href="#"><i class="fas fa-home"></i> Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Summit 2021
                </a>
                <ul className="dropdown-menu r-3" aria-labelledby="navbarDropdown" id="sdrop">
                  <li><Link to="/about-the-event" className="dropdown-item" href="#">About The event</Link></li>
                  <li><Link to="/program" className="dropdown-item" href="#">Program</Link></li>
                  <li><Link to="/FAQs" className="dropdown-item" href="#">FAQs</Link></li>
                  <li><Link to="/Organizing-Committee" className="dropdown-item" href="#">Organizing Committee</Link></li>
                  <li><Link to="/advisory-board" className="dropdown-item" href="#">Advisory Body</Link></li>
                  <li><Link to="/contact-us" className="dropdown-item" href="#">Contact Us</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <LinkScroll to="agendas" className="nav-link " aria-current="page" smooth={true} duration={500} href="#">Agendas</LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll to="speakersloc" className="nav-link " aria-current="page" smooth={true} duration={500} href="#">Speakers</LinkScroll>
              </li>
              <li className="nav-item">
                <LinkScroll to="partnersnsponsers" className="nav-link " aria-current="page" smooth={true} duration={500} href="#">Partners</LinkScroll>
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
                  <li><Link to="/press-release" className="dropdown-item" href="#">Press Release</Link></li>
                  <li><Link to="/news-coverage" className="dropdown-item" href="#">News Coverage</Link></li>
                  <li><Link to="/speech-videos" className="dropdown-item" href="#">Speech/Videos</Link></li>
                  <li><Link to="/gallery" className="dropdown-item" href="#">Gallery</Link></li>
                  <li><Link to="/reports" className="dropdown-item" href="#">Reports</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link " aria-current="page" href="#">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
  
    )
}

export default Header
