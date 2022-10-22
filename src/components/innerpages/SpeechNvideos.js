import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './SpeechNvideos.css'
function SpeechNvideos() {
    return (
        <>
        <Header/>
           <div className="speech_videos col-md-12 mt-4 mb-4">
                <div className="videos_part col-md-8 d-flex">
                   
                    <div className="each_video">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/sCvlO_Ruhfs"
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowfullscreen></iframe>
                   <div className="text-videos">  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p> </div>
                    </div>

                    <div className="each_video">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/sCvlO_Ruhfs"
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowfullscreen></iframe>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>

                    <div className="each_video">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/sCvlO_Ruhfs"
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowfullscreen></iframe>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>

                    <div className="each_video">
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/sCvlO_Ruhfs"
                     title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowfullscreen></iframe>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                    </div>

                </div>

                <div className="speech_part col-md-4">
                    <h3><span> News</span></h3>
                    <div className="news_part">
                        <a href="" id="owll" target="blank">
                         <p id="prp"><span id="hes">Lorem voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  </span></p>
                        </a>
                        <hr/>
                        <a href="" id="owll" target="blank">
                         <p id="prp"><span id="hes">Lorem voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  </span></p>
                        </a>
                        <hr/>
                        <a href="" id="owll" target="blank">
                         <p id="prp"><span id="hes">Lorem voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  </span></p>
                        </a>
                        <hr/>
                        <a href="" id="owll" target="blank">
                         <p id="prp"><span id="hes">Lorem voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  </span></p>
                        </a>
                        <hr/>
                        <a href="" id="owll" target="blank">
                         <p id="prp"><span id="hes">Lorem voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  </span></p>
                        </a>
                        <hr/>
                    </div>
                </div>
           </div>
        <Footer/>
        </>
    )
}

export default SpeechNvideos
