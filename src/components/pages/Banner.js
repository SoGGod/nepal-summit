import React from 'react';
import './banner.css'

function Banner() {
    return (
        <div>
            <div className="banner banner-back ">
                <div className="hero-img">
                    <img src="./images/bannerback.jpg"className="w-100" alt="" />
                </div>
                <div className="logo-reg text-center"> 
                    <div className="logo">
                        <img src="./images/summit-logo.jpg" alt=""/>
                    </div>
                    <div className="reglink mt-4">
                         <button>
                             Apply to Attend
                         </button>
                     </div>
                </div>   
            </div>
        </div>
    )
}

export default Banner
