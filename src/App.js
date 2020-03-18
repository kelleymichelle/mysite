import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Brand from './components/Brand'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jamie Vullo',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "Stand Out",
        subTitle: "Endlessly Building",
        text: "To view my work, click on an image below......"
      },
      about: {
        title: "About Me"
      },
      contact: {
        //wanted let's connect but blows out on mobile
        //look into alternate rendering for mobile/responsive
        title: "Let's Talk"
    }
  }
}

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true} >
          <Navbar className="border-bottom" bg="transparent" expand="sm">
            <Navbar.Brand>
              <Brand />
            </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to='/' style={{color: '#212850'}}>Home</Link>
                    <Link className="nav-link" to='/about' style={{color: '#212850'}}>About</Link>
                    <Link className="nav-link" to='/contact' style={{color: '#212850'}}>Contact</Link>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}


export default App;
