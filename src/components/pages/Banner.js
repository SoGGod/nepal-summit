import React from 'react'
import './banner.css'
function Banner() {
  return (
    <div className="hero-section mt-2 mb-5">
       <div className="d-sm-flex align-items-center justify-content-between w-100" style={{height: '80vh'}}>
          <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
            <span className="text-secondary text-uppercase " style={{marginLeft:'20px'}}>To Register</span>
            <h1 className="display-4 my-4 font-weight-bold " style={{marginLeft:'20px'}}>For The Event <br/>
            <span style={{color: '#9B5DE5'}}>Click Below</span></h1>
            <a href="#" className="btn px-4 py-3 text-white mt-3 mt-sm-0" style={{borderRadius: '30px', backgroundColor: '#09add9', width:'80%', marginLeft:'20px', fontSize:'25px'}}>Register Here</a>
          </div>
          <div className="image-hero col-md-8 h-100 clipped" style={{minHeight: '350px', backgroundImage: 'url(./images/hero-section1.jpg)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
          </div>
        </div>
    </div>
  )
}

export default Banner
