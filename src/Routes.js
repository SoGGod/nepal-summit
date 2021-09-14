import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import Abouttheevent from './components/innerpages/Abouttheevent'
import Programsummit from './components/innerpages/Programsummit'
import Organizingcommitte from './components/innerpages/Organizingcommitte'
import Faqs from './components/innerpages/Faqs'
import Advisoryboard from './components/innerpages/Advisoryboard'
import Home from './Home'
import Contactus from './components/innerpages/Contactus'
import Gallerypics from './components/innerpages/Gallerypics'
import Newscoverage from './components/innerpages/Newscoverage'
function Routes() {
    return (
        <div>
            <Router>
              <Switch>

                    <Route exact path="/" component={App}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/about-the-event" component={Abouttheevent}/>
                    <Route exact path="/program" component={Programsummit}/>
                    <Route exact path="/FAQs" component={Faqs}/>
                    <Route exact path="/Organizing-Committee" component={Organizingcommitte}/>
                    <Route exact path="/advisory-board" component={Advisoryboard}/>
                    <Route exact path="/contact-us" component={Contactus}/>
                    <Route exact path="/gallery" component={Gallerypics}/> 
                    <Route exact path="/news-coverage" component={Newscoverage}/>

              </Switch>
            </Router>
        </div>
    )
}

export default Routes
