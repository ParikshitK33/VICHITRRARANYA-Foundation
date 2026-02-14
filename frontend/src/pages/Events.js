import React from 'react';
import './Events.css';

// Import images
import treeImg from '../assets/images/tree.jpg';
import educationImg from '../assets/images/education.jpg';
import healthImg from '../assets/images/health.jpg';
import outreachImg from '../assets/images/outreach.jpg';

const Events = () => {
    const initiatives = [{
            id: 1,
            category: 'ENVIRONMENT',
            icon: '🌳',
            title: 'Tree Plantation & Environmental Awareness',
            date: 'January 15, 2026',
            location: 'Community Park, India',
            description: 'A large-scale tree plantation drive with environmental awareness sessions, bringing together volunteers to plant saplings and promote sustainable living.',
            image: treeImg,
            alt: 'Tree Plantation Drive',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },
        {
            id: 2,
            category: 'EDUCATION',
            icon: '📚',
            title: 'Educational Support & Skill Development',
            date: 'December 20, 2025',
            location: 'Learning Center, India',
            description: 'An interactive workshop supporting underprivileged children through learning programs, skill development activities, and educational assistance.',
            image: educationImg,
            alt: 'Children Education',
            color: '#1976d2',
            bgColor: '#e3f2fd'
        },
        {
            id: 3,
            category: 'HEALTH',
            icon: '🏥',
            title: 'Free Health Check-up Camp',
            date: 'November 10, 2025',
            location: 'Village Health Center, India',
            description: 'A free health camp providing medical check-ups, health screenings, and awareness sessions for rural communities.',
            image: healthImg,
            alt: 'Health Camp',
            color: '#c2185b',
            bgColor: '#fce4ec'
        },
        {
            id: 4,
            category: 'COMMUNITY',
            icon: '🤝',
            title: 'Community Outreach & Awareness Drive',
            date: 'October 5, 2025',
            location: 'Town Hall, India',
            description: 'An outreach program focused on spreading awareness about hygiene, education, and environmental conservation.',
            image: outreachImg,
            alt: 'Community Outreach',
            color: '#ff9800',
            bgColor: '#fff3e0'
        }
    ];

    const keyInitiatives = [
        'Tree Plantation & Environmental Awareness Programs',
        'Educational Support & Skill Development Activities',
        'Free Health Check-up Camps',
        'Community Outreach & Awareness Drives'
    ];

    return ( <
        div className = "events" > { /* Hero Section with Wave - MATCHING OTHER PAGES */ } <
        div className = "events-hero" >
        <
        div className = "hero-pattern" > < /div> <
        div className = "container" >
        <
        div className = "hero-logo-wrapper" >
        <
        span className = "hero-logo-main" > VICHITRRARANYA < /span> <
        span className = "hero-logo-sub" > Foundation < /span> <
        /div> <
        h1 > Our Work & Projects < /h1> <
        p > Explore our key initiatives— from tree plantations to health camps, making an impact on the ground. < /p> <
        /div> <
        div className = "hero-wave" >
        <
        svg viewBox = "0 0 1440 180"
        fill = "none"
        xmlns = "http://www.w3.org/2000/svg" >
        <
        path d = "M0 180L60 157.5C120 135 240 90 360 67.5C480 45 600 45 720 56.25C840 67.5 960 90 1080 101.25C1200 112.5 1320 112.5 1380 112.5L1440 112.5V180H1380C1320 180 1200 180 1080 180C960 180 840 180 720 180C600 180 480 180 360 180C240 180 120 180 60 180H0Z"
        fill = "white" / >
        <
        /svg> <
        /div> <
        /div>

        { /* Key Initiatives Section - LIKE SERVICES PAGE STYLE */ } <
        div className = "key-initiatives-section" >
        <
        div className = "container" >
        <
        div className = "section-header" >
        <
        h2 className = "section-title" > Our Key Initiatives < /h2> <
        p className = "section-subtitle" > The programs that drive our mission forward < /p> <
        /div>

        <
        div className = "initiatives-list" > {
            keyInitiatives.map((item, index) => ( <
                div key = { index }
                className = "initiative-item" >
                <
                span className = "initiative-bullet" > ✦ < /span> <
                span className = "initiative-text" > { item } < /span> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>

        { /* Initiatives Grid - LIKE SERVICES PAGE CARDS */ } <
        div className = "initiatives-grid-section" >
        <
        div className = "container" > {
            initiatives.map((initiative, index) => ( <
                div key = { initiative.id }
                className = { `initiative-card-horizontal ${index % 2 === 1 ? 'reverse' : ''}` } >
                { /* Image Section with Overlay */ } <
                div className = "initiative-image-wrapper" >
                <
                div className = "initiative-image-large"
                style = {
                    { backgroundColor: initiative.bgColor } } >
                <
                img src = { initiative.image }
                alt = { initiative.alt }
                /> <
                div className = "image-overlay"
                style = {
                    { background: `linear-gradient(135deg, ${initiative.color}80, ${initiative.color})` } } >
                <
                span className = "initiative-icon-large" > { initiative.icon } < /span> <
                /div> <
                /div> <
                div className = "image-accent"
                style = {
                    { backgroundColor: initiative.color } } > < /div> <
                /div>

                { /* Content Section */ } <
                div className = "initiative-content-wrapper" >
                <
                div className = "initiative-content" >
                <
                div className = "category-badge"
                style = {
                    { backgroundColor: initiative.bgColor, color: initiative.color } } >
                <
                span className = "category-icon" > { initiative.icon } < /span> <
                span className = "category-text" > { initiative.category } < /span> <
                /div>

                <
                h2 className = "initiative-title"
                style = {
                    { color: initiative.color } } > { initiative.title } <
                /h2>

                <
                div className = "initiative-meta" >
                <
                div className = "meta-item" >
                <
                span className = "meta-icon" > 📅 < /span> <
                span className = "meta-text" > { initiative.date } < /span> <
                /div> <
                div className = "meta-item" >
                <
                span className = "meta-icon" > 📍 < /span> <
                span className = "meta-text" > { initiative.location } < /span> <
                /div> <
                /div>

                <
                div className = "initiative-description" >
                <
                p > { initiative.description } < /p> <
                /div> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>
    );
};

export default Events;