import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './Advisoryboard.css'
function Advisoryboard() {
    return (
        <>
        <Header/>
        <div>
            
            <div className="advisor_board mb-5">
                <div className="davisor_head text-center">
                    <h1 className="advisor_h1 text-center">Meet Our Advisor Body</h1>
                    <p>Meet our leaders: an experienced team that
                         combines strong functional expertise and diverse
                          perspectives to set strategic direction and meet
                           emergent challenges.</p>
                </div>
                <p className="age">Advisor Group Executives</p>
                <div className="advisor_team">
                    <div className="advisor_member">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                        </div>
                        <div className="advisor_content">
                                <p className="name">Mr. Anil Paudel</p>
                                <p className="job"> Web developer </p>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    <div className="advisor_member">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                        </div>
                        <div className="advisor_content">
                                <p className="name">Mr. Anil Paudel</p>
                                <p className="job"> Web developer </p>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    <div className="advisor_member">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                        </div>
                        <div className="advisor_content">
                                 <p className="name">Mr. Anil Paudel</p>
                                <p className="job"> Web developer </p>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Advisoryboard
