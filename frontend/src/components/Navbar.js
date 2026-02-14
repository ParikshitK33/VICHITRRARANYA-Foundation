import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from './logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ( <
        nav className = "navbar" >
        <
        div className = "nav-container" >
        <
        Link to = "/"
        className = "nav-logo"
        onClick = {
            () => setIsOpen(false)
        } >
        <
        img src = { logoImg }
        alt = "Vichitrraranya Foundation"
        className = "navbar-logo-img" / >
        <
        div className = "logo-text" >
        <
        span className = "logo-main" > Vichitrraranya < /span> <
        span className = "logo-sub" > Foundation < /span> < /
        div > <
        /Link>

        <
        div className = "nav-menu-icon"
        onClick = {
            () => setIsOpen(!isOpen)
        } >
        <
        span className = { isOpen ? 'bar open' : 'bar' } > < /span> <
        span className = { isOpen ? 'bar open' : 'bar' } > < /span> <
        span className = { isOpen ? 'bar open' : 'bar' } > < /span> < /
        div >

        <
        ul className = { isOpen ? 'nav-menu active' : 'nav-menu' } >
        <
        li className = "nav-item" >
        <
        Link to = "/"
        className = "nav-link"
        onClick = {
            () => setIsOpen(false)
        } > Home < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link to = "/services"
        className = "nav-link"
        onClick = {
            () => setIsOpen(false)
        } > Services < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link to = "/about"
        className = "nav-link"
        onClick = {
            () => setIsOpen(false)
        } > About Us < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link to = "/events"
        className = "nav-link"
        onClick = {
            () => setIsOpen(false)
        } > Events < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link to = "/gallery"
        className = "nav-link"
        onClick = {
            () => setIsOpen(false)
        } > Gallery < /Link> < /
        li > <
        li className = "nav-item" >
        <
        Link to = "/contact"
        className = "nav-link"
        onClick = {
            () => setIsOpen(false)
        } > Contact < /Link> < /
        li > <
        /ul> < /
        div > <
        /nav>
    );
};

export default Navbar;