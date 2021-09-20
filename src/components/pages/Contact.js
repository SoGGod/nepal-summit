import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contactss">
            <h2>Contact</h2>
            <div className="contact-us">
                <div className="contact-width">
                <div className="row w-100 pt-5 pb-4 ">
                    <div className="col-md-6 first-contact">
                        <h3 className="pb-3"><span>Contact Us</span></h3>
                        <div className="contact-icon d-flex text-center">
                            <div className="location-ion">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="location-text ms-2"> 
                                <p>Kathmandu,Nepal</p>
                            </div>
                        </div>
                        <div className="contact-icon d-flex">
                            <div className="location-ion">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div className="location-text ms-2">
                                <p>info@nepalbusinesssummit.com</p>
                            </div>
                        </div>
                        <div className="contact-icon d-flex">
                            <div className="location-ion">
                            <i class="fas fa-phone-volume"></i>
                            </div>
                            <div className="location-text ms-2">
                                <p>+97723456734567</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="contactForm">
                        <form >
                        <h3><span>Send Message</span></h3>
                        <div className="inputBox">
                            <input type="text" name="name" required="required" />
                            <span className="ms-2">Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text"  name="email" required="required" />
                            <span className="ms-2">Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea  name="message" required="required"  cols="auto" rows="auto" required defaultValue={""} />
                            <span className="ms-2">Type your Messgae</span>
                        </div>
                        <div className="inputBox">
                            <input  type="submit" value="Send" />
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
