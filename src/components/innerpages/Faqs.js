import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './Faqs.css'
function Faqs() {
    return (
      <>
      <Header/>
        <div>
            
            <div className="faq-main pt-4 mb-5">
            <h3 className="faqss pt-5 pb-5"> Frequently Asked Questions (FAQ) </h3>
            
            <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse " aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
               </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse " aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse " aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
                   </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseSeven" className="accordion-collapse collapse " aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
                </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </button>
          </h2>
          <div id="collapseEight" className="accordion-collapse collapse " aria-labelledby="headingEight" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

export default Faqs
