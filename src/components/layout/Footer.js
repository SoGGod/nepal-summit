import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className="footer-color">
            <div className="footer text-center">
                <div className="row w-100">
                    <div className="col-md-3">
                        <h5><span>About Us</span></h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, itaque possimus illum totam facere aspernatur deleniti illo 
                            blanditiis sint praesentium necessitatibus
                             adipisci obcaecati numquam recusandae cupiditate corrupti tempora saepe commodi.</p>
                    </div>
                    <div className="col-md-3">
                        <h5 className="applytoattend"><span>Apply to Attend</span></h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus accusamus adipisci quibusdam! Blanditiis</p>
                        <button>Apply to Attend</button>
                    </div>
                    <div className="col-md-3">
                        <h5><span>Quick Links</span></h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloresi voluptas nesciunt porro modi, vel veniam.</p>
                    </div>
                    <div className="right_most_part col-md-3 ">
                        <h5><span>Find Us</span></h5>
                        <div className="find-icon">
                            <div className="icon">
                                <p><i class="fab fa-facebook-f"></i> www.facebook.com</p>
                            </div>
                            <div className="icon">
                                <p><i class="fab fa-twitter"></i> www.twitter.com</p>
                            </div>
                            <div className="icon">
                                <p> <i class="fab fa-youtube"></i> www.youtube.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
