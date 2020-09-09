import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 
function App() {
  return (
    <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Redirect to ="/" />
        </Switch>
    </>
  );
}

export default App;
