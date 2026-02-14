import React from 'react';
import './About.css';

const About = () => {
    const beliefs = [{
            id: 1,
            icon: '🌱',
            title: 'Education First',
            description: 'True development starts with education. We believe every child deserves quality learning opportunities.',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },
        {
            id: 2,
            icon: '🌍',
            title: 'Harmony with Nature',
            description: 'Progress must go hand in hand with environmental conservation and sustainable practices.',
            color: '#1976d2',
            bgColor: '#e3f2fd'
        },
        {
            id: 3,
            icon: '❤️',
            title: 'Community First',
            description: 'Grassroots change comes from empowering communities to lead their own development.',
            color: '#c2185b',
            bgColor: '#fce4ec'
        }
    ];

    return ( <
        div className = "about" > { /* Hero Section with Wave */ } <
        div className = "about-hero" >
        <
        div className = "hero-pattern" > < /div> <
        div className = "container" >
        <
        div className = "hero-logo-wrapper" >
        <
        span className = "hero-logo-main" > VICHITRRARANYA < /span> <
        span className = "hero-logo-sub" > Foundation < /span> <
        /div> <
        h1 > About Us < /h1> <
        p > Learn about who we are, what drives us, and the impact we 're creating every day.</p> <
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

        { /* Who We Are Section - CENTERED */ } <
        div className = "who-we-are-section" >
        <
        div className = "container" >
        <
        div className = "section-header" >
        <
        h2 className = "section-title" > Who We Are < /h2> <
        p className = "section-subtitle" > Our story and mission < /p> <
        /div>

        <
        div className = "who-we-are-content-centered" >
        <
        p className = "highlight-text-centered" >
        Vichitraranya Social Welfare Foundation is a non - profit organization dedicated to social development and environmental sustainability.Our work is driven by compassion, integrity,
        and a deep sense of responsibility towards society. <
        /p> <
        p className = "normal-text-centered" >
        Founded in 2020, we have grown from a small group of passionate individuals to a recognized organization making tangible impact across communities. <
        /p> <
        /div> <
        /div> <
        /div>

        { /* What We Believe Section */ } <
        div className = "what-we-believe-section" >
        <
        div className = "container" >
        <
        div className = "section-header" >
        <
        h2 className = "section-title" > What We Believe < /h2> <
        p className = "section-subtitle" > Our core principles guide everything we do </p> <
            /div>

        <
        div className = "beliefs-grid" > {
            beliefs.map((belief) => ( <
                div key = { belief.id }
                className = "belief-card"
                style = {
                    { borderTop: `4px solid ${belief.color}` } } >
                <
                div className = "belief-icon-wrapper"
                style = {
                    { backgroundColor: belief.bgColor } } >
                <
                span className = "belief-icon" > { belief.icon } < /span> <
                /div> <
                h3 className = "belief-title"
                style = {
                    { color: belief.color } } > { belief.title } < /h3> <
                p className = "belief-description" > { belief.description } < /p> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /div>

        { /* Mission Vision Values */ } <
        div className = "mv-section" >
        <
        div className = "container" >
        <
        div className = "section-header" >
        <
        h2 className = "section-title" > Our Mission, Vision & Values < /h2> <
        p className = "section-subtitle" > The foundation of our work < /p> <
        /div>

        <
        div className = "mv-grid" >
        <
        div className = "mv-card mission" >
        <
        div className = "mv-icon" > 🎯 < /div> <
        h3 > Our Mission < /h3> <
        p > To empower communities through environmental protection, quality education, and accessible healthcare
        for lasting social change. < /p> <
        /div>

        <
        div className = "mv-card vision" >
        <
        div className = "mv-icon" > 👁️ < /div> <
        h3 > Our Vision < /h3> <
        p > A world where every individual is educated, healthy, and lives in harmony with nature— creating sustainable development
        for all. < /p> <
        /div>

        <
        div className = "mv-card values" >
        <
        div className = "mv-icon" > 💎 < /div> <
        h3 > Our Values < /h3> <
        p > Compassion, integrity, inclusivity, and a deep sense of responsibility towards society and the environment. < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default About;