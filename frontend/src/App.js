import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/services"
        element = { < Services / > }
        /> <
        Route path = "/events"
        element = { < Events / > }
        /> <
        Route path = "/gallery"
        element = { < Gallery / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/donate"
        element = { < Donate / > }
        /> <
        Route path = "/volunteer"
        element = { < Volunteer / > }
        /> <
        /Routes> <
        Footer / >
        <
        /div> <
        /Router>
    );
}

export default App;