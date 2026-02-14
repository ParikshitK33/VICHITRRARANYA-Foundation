import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
    const focusAreas = [{
            id: 1,
            title: 'Environment',
            icon: '🌳',
            description: 'Tree plantation drives, awareness programs, cleanliness campaigns, and sustainable practices.',
            color: '#2e7d32',
            bgColor: '#e8f5e9',
            link: '/services#environment'
        },
        {
            id: 2,
            title: 'Education',
            icon: '📚',
            description: 'Supporting underprivileged children through learning programs and educational assistance.',
            color: '#1976d2',
            bgColor: '#e3f2fd',
            link: '/services#education'
        },
        {
            id: 3,
            title: 'Health',
            icon: '🏥',
            description: 'Health camps, preventive healthcare, and awareness about hygiene and well-being.',
            color: '#c2185b',
            bgColor: '#fce4ec',
            link: '/services#health'
        }
    ];

    return ( <
        div className = "home" > { /* Hero Section with Slider */ } <
        section className = "home-hero" >
        <
        div className = "hero-slider-wrapper" >
        <
        ImageSlider / >
        <
        /div> <
        div className = "hero-overlay" >
        <
        div className = "container" >
        <
        div className = "hero-content" >
        <
        div className = "hero-logo" >
        <
        span className = "hero-logo-main" > VICHITRRARANYA < /span> <
        span className = "hero-logo-sub" > Foundation < /span> <
        /div> <
        h1 className = "hero-title" > Creating a Sustainable, < br / > Educated & Healthy Society < /h1> <
        p className = "hero-description" >
        We are a committed social welfare organization working to uplift communities through environmental protection, quality education, and accessible healthcare. <
        /p> <
        div className = "hero-buttons" >
        <
        Link to = "/donate"
        className = "btn-primary" > Donate Now < /Link> <
        Link to = "/volunteer"
        className = "btn-secondary" > Become a Volunteer < /Link> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "hero-wave" >
        <
        svg viewBox = "0 0 1440 120"
        fill = "none"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        path d = "M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        fill = "white" / >
        <
        /svg> <
        /div> <
        /section>

        { /* Focus Areas Section */ } <
        section className = "focus-areas" >
        <
        div className = "container" >
        <
        div className = "section-header" >
        <
        h2 className = "section-title" > Our Focus Areas < /h2> <
        p className = "section-subtitle" > We work across three core areas to create lasting impact < /p> <
        /div>

        <
        div className = "focus-grid" > {
            focusAreas.map((area) => ( <
                div key = { area.id }
                className = "focus-card"
                style = {
                    { borderTop: `4px solid ${area.color}` } } >
                <
                div className = "focus-icon-wrapper"
                style = {
                    { backgroundColor: area.bgColor } } >
                <
                span className = "focus-icon" > { area.icon } < /span> <
                /div> <
                h3 className = "focus-title"
                style = {
                    { color: area.color } } > { area.title } < /h3> <
                p className = "focus-description" > { area.description } < /p> <
                Link to = { area.link }
                className = "focus-link"
                style = {
                    { color: area.color } } >
                Learn More→ <
                /Link> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section> <
        /div>
    );
};

export default Home;