import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './Contactus.css'
function Contactus() {
    return (
      <>
      <Header/>
        <div className="contact_us">
            <div className="container_contactus d-flex justify-content-center">

            <div className="row my-5 mx-5">
        <div className="col-md-6"> <img className="contact_us_img" src="https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-message-icon-design-vector-png-image_1587713.jpg" alt="IMG" /> </div>
        <div className="col-md-6">
          <h2 className="form-title">Contact us</h2>
          <p className="justify text-muted">Have an enquiry or would like to give us feedback?<br />Fill out the form below to contact our team.</p>
          <form>
            <div className="form-group pt-2 pl-1"> 
            <label htmlFor="exampleInputName">Your name</label> 
            <input type="text" className="form-control" id="exampleInputName" /> 
            </div>
            <div className="form-group pl-1"> 
            <label htmlFor="exampleInputEmail1">Your email address</label> 
            <input type="email" className="form-control" id="exampleInputEmail1" /> 
            </div>
            <div className="form-group pl-1">
              <label htmlFor="exampleFormControlTextarea1">Your message</label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} /> 
              </div>
            <div className="row">
              <div className="col-md-3 offset-md-9"><button type="submit" className="btn btn-primary">Send</button></div>
            </div>
          </form>
        </div>
      </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contactus
