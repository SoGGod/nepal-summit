import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './Abouttheevent.css'
function Abouttheevent() {
    return (
      <>
      <Header/>
        <div>
            <div className="abouttheevent pt-5 mt-5 mb-5">
        <h2 className="taa pb-4"> About the Event  </h2>
        <div className="transimgcont">
          <div className="transdesc">
            <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
             voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
             cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
              id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
               Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor 
                repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                 saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
                  earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                   alias consequatur aut perferendis doloribus asperiores repellat.. 
            </p>
            <ol type="1">
              <li>saepe eveniet ut et voluptates</li>
              <li>saepe eveniet ut et voluptates</li>
              <li>saepe eveniet ut et voluptates</li>
              <li>saepe eveniet ut et voluptates</li>
              <li>saepe eveniet ut et voluptates</li>
              <li>saepe eveniet ut et voluptates</li>
              <li>saepe eveniet ut et voluptates</li>
              
            </ol>
          </div> 
          <div className="transimg">
            <img src="https://www.slideteam.net/media/catalog/product/cache/960x720/e/v/event_planning_powerpoint_presentation_slides_Slide05.jpg" />
          </div>
        </div>
      </div>
        </div>
        <Footer/>
        </>
    )
}

export default Abouttheevent
