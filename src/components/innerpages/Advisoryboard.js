import React from 'react'
import './Advisoryboard.css'
function Advisoryboard() {
    return (
        <div>
            
            <div className="advisor_board">
                <div className="davisor_head">
                    <h1>Meet Our Advisor Team</h1>
                    <p>Meet our leaders: an experienced team that
                         combines strong functional expertise and diverse
                          perspectives to set strategic direction and meet
                           emergent challenges.</p>
                </div>
                <p className="age">Advisor Group Executives</p>
                <div className="advisor_team">
                    <div className="advisor_member">
                        <div className="image">
                            <img src="./images/advisor/advisor1.jpg" alt="" />
                        </div>
                        <div className="advisor_content">
                                <p className="name">Mr. Sankar Prasad Koirala</p>
                                <p className="job">Former Finance Minister </p>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    <div className="advisor_member">
                        <div className="image">
                            <img src="./images/advisor/Bimala-Rai-Paudel.jpg" alt="" />
                        </div>
                        <div className="advisor_content">
                                <p className="name">Hon. Bimala Rai Poudel PHD</p>
                                <p className="job">National Assembly Member </p>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    <div className="advisor_member">
                        <div className="image">
                            <img src="./images/advisor/Hemraj-Dhakal.jpg" alt="" />
                        </div>
                        <div className="advisor_content">
                                <p className="name">Mr. Hemraj Dhakal</p>
                                <p className="job">Executive Director IME Group</p>
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    <div className="advisor_member">
                        <div className="image">
                            {/* <img src="./images/advisor/man-bahadur-bk-5.jpg" alt="" /> */}
                        </div>
                        <div className="advisor_content">
                                {/* <p className="name">Mr. Man Bahadur BK </p> */}
                                <p className="name">Mr. Lorem Ipsum</p>
                                {/* <p className="job">Former Sectetry , Government of Nepal  </p> */}
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                   
                    <div className="advisor_member">
                        <div className="image">
                            {/* <img src="./images/advisor/Arun-Nepal.jpg" alt="" /> */}
                        </div>
                        <div className="advisor_content">
                                <p className="name">Mr. Lorem Ipsum</p>
                                {/* <p className="name">Mr. Arun Nepal</p> */}
                                {/* <p className="job">Former Industry Minister</p> */}
                                <div className="media-icons">
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                </div>
                        </div>
                    </div>
                    <div className="advisor_member">
                        <div className="image">
                            {/* <img src="./images/advisor/Arun-Nepal.jpg" alt="" /> */}
                        </div>
                        <div className="advisor_content">
                        <p className="name">Mr. Lorem Ipsum</p>
                                {/* <p className="name">Mr. Arun Nepal</p>
                                <p className="job">Former Industry Minister</p> */}
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
    )
}

export default Advisoryboard
