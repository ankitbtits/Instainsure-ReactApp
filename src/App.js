
import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Navbar from './navbar';
import { Route, Link } from 'react-router-dom';
import {} from 'bootstrap-4-react';
import './assets/css/main.css';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />   
      <Route exact path="/Contact" component={Contact} />
      <Footer/>
    </div>
  );
}

export default App;