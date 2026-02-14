import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoImg from './logo.jpg';

const Footer = () => {
    return ( <
        footer className = "footer" >
        <
        div className = "footer-container" > { /* Logo and Description - Column 1 */ } <
        div className = "footer-section" >
        <
        Link to = "/"
        className = "footer-logo" >
        <
        img src = { logoImg }
        alt = "Vichitrraranya Foundation"
        className = "footer-logo-img" / >
        <
        div className = "footer-logo-text" >
        <
        span className = "footer-logo-main" > VICHITRRARANYA < /span> <
        span className = "footer-logo-sub" > Foundation < /span> <
        /div> <
        /Link> <
        p className = "footer-description" >
        Working
        for a Sustainable, Educated & Healthy Society.We create long - lasting impact by empowering people and protecting nature. <
        /p> <
        /div>

        { /* Quick Links - Column 2 */ } <
        div className = "footer-section" >
        <
        h4 > Quick Links < /h4> <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/services" > Services < /Link></li >
        <
        li > < Link to = "/about" > About Us < /Link></li >
        <
        li > < Link to = "/events" > Events < /Link></li >
        <
        li > < Link to = "/gallery" > Gallery < /Link></li >
        <
        li > < Link to = "/contact" > Contact < /Link></li >
        <
        /ul> <
        /div>

        { /* Contact Info - Column 3 */ } <
        div className = "footer-section" >
        <
        h4 > Contact Info < /h4> <
        ul className = "contact-info-list" >
        <
        li > < a href = "mailto:info@vichitraranya.org" > info @vichitraranya.org < /a></li >
        <
        li > < a href = "tel:+919876543210" > +91 9876543210 < /a></li >
        <
        /ul> <
        /div>

        { /* Follow Us & Donate - Column 4 */ } <
        div className = "footer-section follow-donate-section" >
        <
        div className = "follow-donate-wrapper" >
        <
        div className = "follow-section" >
        <
        h4 > Follow Us < /h4> <
        ul className = "follow-list" >
        <
        li > < a href = "https://facebook.com"
        target = "_blank"
        rel = "noopener noreferrer" > Facebook < /a></li >
        <
        li > < a href = "https://twitter.com"
        target = "_blank"
        rel = "noopener noreferrer" > Twitter < /a></li >
        <
        li > < a href = "https://instagram.com"
        target = "_blank"
        rel = "noopener noreferrer" > Instagram < /a></li >
        <
        li > < a href = "https://youtube.com"
        target = "_blank"
        rel = "noopener noreferrer" > YouTube < /a></li >
        <
        /ul> <
        /div>

        <
        div className = "donate-section" >
        <
        h4 > Get Involved < /h4> <
        Link to = "/donate"
        className = "btn-donate" > Donate Now < /Link> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Copyright */ } <
        div className = "footer-bottom" >
        <
        div className = "container" >
        <
        p > ©2026 Vichitrraranya Social Welfare Foundation.All rights reserved. < /p> <
        /div> <
        /div> <
        /footer>
    );
};

export default Footer;