import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Agenda from './components/pages/Agenda';
import Banner from './components/pages/Banner';
import Contact from './components/pages/Contact';
import OrganizingTeam from './components/pages/OrganizingTeam';
import Partners from './components/pages/Partners';
import Promo from './components/pages/Promo';
import Speakers from './components/pages/Speakers';
import Check from './components/Check';

function App() {
  return (
    <div className="app-back">
      <Header/>
      <Banner/>
      <About/>
      <Speakers/>
      <Agenda/>
      <Partners/>
      <OrganizingTeam/>
      <Promo/>
      <Contact/>
      <Footer/>
        {/* <Check/> */}
    </div>
  );
}

export default App;
