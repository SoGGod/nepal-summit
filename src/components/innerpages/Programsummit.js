import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import './Programsummit.css'
function Programsummit() {
    return (
        <>
        <Header/>
        <div className="program">
            <div className="program_heading">
                <h3> Program </h3>
            </div>
            <div className="program_down col-md-4 w-100">
             <div className="schedule_image_head">
             <h4 id="schedule_h4" style={{textAlign:'center'}}>Program Schedules</h4>
                 <img className="schedule_image w-100" style={{marginTop:'-20px',justifyContent:'center'}} src="https://www.pngkey.com/png/detail/14-140024_4-arrows-right-arrow-gif-transparent-background.png"/>
             </div>
                <div className="all_programs_list">
                <div className="prodram_day1 col-md-4 mt-4 ps-5">
               
                <h4> Day 1</h4> <hr/>
                <ul className="day1_ul">
                    <p> Exhibition opening</p>
                    <p> Session 1 : Lorem ipsum dummy text</p>
                    <p> Session 2 : Lorem ipsum dummy text</p>
                    <p> Session 3 : Lorem ipsum dummy text</p>
                    <p> Session 4 : Lorem ipsum dummy text</p>
                </ul>
                </div>
                <div className="program_day2 col-md-4 mt-4 ps-5">
                <h4> Day 2</h4><hr/>
                <ul className="day2_ul">
                <p> Exhibition opening</p>
                    <p> Session 1 : Lorem ipsum dummy text</p>
                    <p> Session 2 : Lorem ipsum dummy text</p>
                    <p> Session 3 : Lorem ipsum dummy text</p>
                    <p> Session 4 : Lorem ipsum dummy text</p>
                </ul>
                </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Programsummit
