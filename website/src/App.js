import React from 'react';
// import logo from './logo.svg';43108rat
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Profile from './components/profile-page';
import HomePageBody from './components/HomePageBody';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
function App() {
  return (
    <div className="">
      <header className="">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
               <Profile />
          </Route>
          <Route path="/users">
               <Profile />
          </Route>
          <Route path="/">
                <NavBar />
                <HomePageBody />
                <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
