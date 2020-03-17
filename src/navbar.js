import React from 'react';
import logo from './assets/images/logo.svg';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">ABOUT US</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">INSTANT QUOTES</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">BLOGS</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">FAQ</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/Contact">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    );
}

export default Navbar;