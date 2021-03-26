import Navbar from './components/navbar'
import './styles/index.scss'
import {useState} from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

//import all pages
import Notice from './pages/Notice';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Gallery from './pages/Gallery';
import Payment from './pages/Payments';
import Student from './pages/Students';
import StudentOne from './pages/StudentOne'
import ContactOne from './pages/contactone';


function App() {
  const [active, setActive] = useState('active-cont');
  const [activeNav , setActiveNav] = useState('active-nav');
  const toogle =()=>{
    return active === 'active-cont' && activeNav === 'active-nav' ?( setActive(''),setActiveNav('')) : ( setActive('active-cont'),setActiveNav('active-nav'));
  }
  return (<Router>
    <div className="App">
      <Navbar activeNav={activeNav}  />

      <div class={`p-1 my-container ${active}`}>
      <nav class="navbar  top-navbar navbar-light bg-light px-5">
      <a onClick={toogle} class="btn border-0" id="menu-btn"><i class="bx bx-menu"></i></a>
    </nav>
        <Switch>
          <Route exact path="/">
          <Student/>
          </Route>
          <Route exact path="/notice">
            <Notice/>
            </Route>
            <Route exact path="/students">
            <Student/>
            </Route>
            <Route exact path="/feedback">
           <Feedback/>
            </Route>
            <Route exact path="/gallery">
            <Gallery/>
            </Route>
            <Route exact path="/payment">
            <Payment/>
            </Route>
            <Route exact path="/contact">
            <Contact/>
            </Route>
            <Route exact path="/student/:uid">
            <StudentOne/>
            </Route>
            <Route exact path="/contact/:uid">
            <ContactOne/>
            </Route>
        </Switch>
      </div>
    </div>
    </Router>);
}

export default App;


