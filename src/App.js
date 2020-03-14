import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Navbar from './navbar';
import { Route, Link } from 'react-router-dom';
import {} from 'bootstrap-4-react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />   
      <Route exact path="/Contact" component={Contact} />
    </div>
  );
}

export default App;