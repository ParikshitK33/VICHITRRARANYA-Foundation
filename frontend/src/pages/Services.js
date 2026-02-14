import React from 'react';
import './Services.css';

// Import images
import environmentImg from '../assets/images/tree.jpg';
import educationImg from '../assets/images/education.jpg';
import healthImg from '../assets/images/health.jpg';

const Services = () => {
    const services = [{
            id: 1,
            category: 'ENVIRONMENT',
            icon: '🌳',
            title: 'Environmental Conservation',
            description: 'We actively work on environmental conservation through tree plantation drives, awareness programs, cleanliness campaigns, and promotion of sustainable practices.',
            activities: [
                'Tree Plantation Drives',
                'Cleanliness Campaigns',
                'Sustainability Awareness',
                'Green Earth Initiatives'
            ],
            image: environmentImg,
            alt: 'Environment Conservation',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },
        {
            id: 2,
            category: 'EDUCATION',
            icon: '📚',
            title: 'Educational Support',
            description: 'We believe education is the foundation of social change. Our initiatives support underprivileged children through learning programs, awareness campaigns, and educational assistance.',
            activities: [
                'Learning Programs',
                'Skill Development',
                'Educational Assistance',
                'Awareness Campaigns'
            ],
            image: educationImg,
            alt: 'Children Education',
            color: '#1976d2',
            bgColor: '#e3f2fd'
        },
        {
            id: 3,
            category: 'HEALTH',
            icon: '🏥',
            title: 'Healthcare Initiatives',
            description: 'We focus on community health by organizing health camps, promoting preventive healthcare, and spreading awareness about hygiene and well-being.',
            activities: [
                'Free Health Camps',
                'Preventive Healthcare',
                'Hygiene Awareness',
                'Community Well-being'
            ],
            image: healthImg,
            alt: 'Health Camp',
            color: '#c2185b',
            bgColor: '#fce4ec'
        }
    ];

    return ( <
        div className = "services" > { /* Hero Section with Wave - ENLARGED */ } <
        div className = "services-hero" >
        <
        div className = "hero-pattern" > < /div> <
        div className = "container" >
        <
        div className = "hero-logo-wrapper" >
        <
        span className = "hero-logo-main" > VICHITRRARANYA < /span> <
        span className = "hero-logo-sub" > Foundation < /span> <
        /div> <
        h1 > Our Services < /h1> <
        p > We work across three core areas to create a sustainable, educated, and healthy society. < /p> <
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

        { /* Services Container */ } <
        div className = "services-container" >
        <
        div className = "container" > {
            services.map((service, index) => ( <
                div key = { service.id }
                className = { `service-card-horizontal ${index % 2 === 1 ? 'reverse' : ''}` } >
                { /* Image Section with Overlay */ } <
                div className = "service-image-wrapper" >
                <
                div className = "service-image-large"
                style = {
                    { backgroundColor: service.bgColor } } >
                <
                img src = { service.image }
                alt = { service.alt }
                /> <
                div className = "image-overlay"
                style = {
                    { background: `linear-gradient(135deg, ${service.color}80, ${service.color})` } } >
                <
                span className = "service-icon-large" > { service.icon } < /span> <
                /div> <
                /div> <
                div className = "image-accent"
                style = {
                    { backgroundColor: service.color } } > < /div> <
                /div>

                { /* Content Section */ } <
                div className = "service-content-wrapper" >
                <
                div className = "service-content" >
                <
                div className = "category-badge"
                style = {
                    { backgroundColor: service.bgColor, color: service.color } } >
                <
                span className = "category-icon" > { service.icon } < /span> <
                span className = "category-text" > { service.category } < /span> <
                /div>

                <
                h2 className = "service-title"
                style = {
                    { color: service.color } } > { service.title } <
                /h2>

                <
                div className = "service-description" >
                <
                p > { service.description } < /p> <
                /div>

                <
                div className = "activities-container" >
                <
                h3 style = {
                    { color: service.color } } >
                <
                span className = "activities-icon" > ✨ < /span> Key Activities <
                /h3> <
                div className = "activities-grid" > {
                    service.activities.map((activity, i) => ( <
                        div key = { i }
                        className = "activity-card"
                        style = {
                            { backgroundColor: service.bgColor } } >
                        <
                        span className = "activity-icon" > { service.icon === '🌳' ? '🌱' : service.icon === '📚' ? '📖' : '❤️' } <
                        /span> <
                        span className = "activity-text" > { activity } < /span> <
                        /div>
                    ))
                } <
                /div> <
                /div> <
                /div> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>

        { /* CTA Section */ } <
        div className = "services-cta" >
        <
        div className = "container" >
        <
        h2 > Want to Make a Difference ? < /h2> <
        p > Join us in our mission to create a better world < /p> <
        div className = "cta-buttons" >
        <
        a href = "/volunteer"
        className = "cta-button primary" > Become a Volunteer < /a> <
        a href = "/donate"
        className = "cta-button secondary" > Support Our Work < /a> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default Services;