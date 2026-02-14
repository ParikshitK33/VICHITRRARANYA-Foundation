import React, { useState } from 'react';
import './Gallery.css';

// Import all gallery images
import treeImg from '../assets/images/tree.jpg';
import educationImg from '../assets/images/education.jpg';
import healthImg from '../assets/images/health.jpg';
import outreachImg from '../assets/images/outreach.jpg';
import beachImg from '../assets/images/beach.jpg';
import schoolImg from '../assets/images/school.jpg';
import skillImg from '../assets/images/skill.jpg';
import sustainImg from '../assets/images/sustain.jpg';
import medicalImg from '../assets/images/medical.jpg';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const galleryImages = [
        // Environment Category
        {
            id: 1,
            title: 'Tree Plantation Drive',
            category: 'environment',
            icon: '🌳',
            location: 'Community Park',
            date: 'December 2025',
            image: treeImg,
            alt: 'Tree Plantation Drive',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },
        {
            id: 2,
            title: 'Environmental Awareness Seminar',
            category: 'environment',
            icon: '🌍',
            location: 'Coastal Area',
            date: 'January 2026',
            image: sustainImg,
            alt: 'Environmental Awareness Seminar',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },
        {
            id: 3,
            title: 'Beach Cleanup Drive',
            category: 'environment',
            icon: '🏖️',
            location: 'Coastal Area',
            date: 'February 2026',
            image: beachImg,
            alt: 'Beach Cleanup Drive',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },
        {
            id: 4,
            title: 'Sustainability Workshop',
            category: 'environment',
            icon: '♻️',
            location: 'Eco Center',
            date: 'March 2026',
            image: sustainImg,
            alt: 'Sustainability Workshop',
            color: '#2e7d32',
            bgColor: '#e8f5e9'
        },

        // Education Category
        {
            id: 5,
            title: 'Educational Support',
            category: 'education',
            icon: '📚',
            location: 'Learning Center',
            date: 'December 2025',
            image: educationImg,
            alt: 'Educational Support',
            color: '#1976d2',
            bgColor: '#e3f2fd'
        },
        {
            id: 6,
            title: 'Skill Development Class',
            category: 'education',
            icon: '🔧',
            location: 'Community Center',
            date: 'February 2026',
            image: skillImg,
            alt: 'Skill Development Class',
            color: '#1976d2',
            bgColor: '#e3f2fd'
        },
        {
            id: 7,
            title: 'School Supply Distribution',
            category: 'education',
            icon: '🎒',
            location: 'Government School',
            date: 'January 2026',
            image: schoolImg,
            alt: 'School Supply Distribution',
            color: '#1976d2',
            bgColor: '#e3f2fd'
        },

        // Health Category
        {
            id: 8,
            title: 'Free Health Check-up Camp',
            category: 'health',
            icon: '🏥',
            location: 'Rural Community',
            date: 'January 2026',
            image: healthImg,
            alt: 'Health Check-up Camp',
            color: '#c2185b',
            bgColor: '#fce4ec'
        },
        {
            id: 9,
            title: 'Health Awareness Seminar',
            category: 'health',
            icon: '❤️',
            location: 'City Hall',
            date: 'March 2026',
            image: medicalImg,
            alt: 'Health Awareness Seminar',
            color: '#c2185b',
            bgColor: '#fce4ec'
        },
        {
            id: 10,
            title: 'Medical Camp',
            category: 'health',
            icon: '💊',
            location: 'Village Center',
            date: 'February 2026',
            image: medicalImg,
            alt: 'Medical Camp',
            color: '#c2185b',
            bgColor: '#fce4ec'
        },

        // Community Category
        {
            id: 11,
            title: 'Community Outreach',
            category: 'community',
            icon: '🤝',
            location: 'Town Hall',
            date: 'October 2025',
            image: outreachImg,
            alt: 'Community Outreach',
            color: '#ff9800',
            bgColor: '#fff3e0'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Photos', icon: '📸' },
        { id: 'environment', name: 'Environment', icon: '🌳', color: '#2e7d32' },
        { id: 'education', name: 'Education', icon: '📚', color: '#1976d2' },
        { id: 'health', name: 'Health', icon: '🏥', color: '#c2185b' },
        { id: 'community', name: 'Community', icon: '🤝', color: '#ff9800' }
    ];

    const filteredImages = activeCategory === 'all' ?
        galleryImages :
        galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return ( <
        div className = "gallery" > { /* Hero Section with Wave - MATCHING OTHER PAGES */ } <
        div className = "gallery-hero" >
        <
        div className = "hero-pattern" > < /div> <
        div className = "container" >
        <
        div className = "hero-logo-wrapper" >
        <
        span className = "hero-logo-main" > VICHITRRARANYA < /span> <
        span className = "hero-logo-sub" > Foundation < /span> <
        /div> <
        h1 > Our Gallery < /h1> <
        p > Images from our activities, campaigns, and community programs showcasing real impact on the ground. < /p> <
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

        { /* Category Filter Section - LIKE SERVICES PAGE STYLE */ } <
        div className = "gallery-filter-section" >
        <
        div className = "container" >
        <
        div className = "section-header" >
        <
        h2 className = "section-title" > Browse by Category < /h2> <
        p className = "section-subtitle" > Filter images by our focus areas < /p> <
        /div>

        <
        div className = "category-filter-grid" > {
            categories.map(category => ( <
                button key = { category.id }
                className = { `category-filter-btn ${activeCategory === category.id ? 'active' : ''}` }
                onClick = {
                    () => setActiveCategory(category.id) }
                style = { activeCategory === category.id && category.color ? { backgroundColor: category.color, color: 'white' } : {} } >
                <
                span className = "filter-icon" > { category.icon } < /span> <
                span className = "filter-name" > { category.name } < /span> <
                /button>
            ))
        } <
        /div> <
        /div> <
        /div>

        { /* Gallery Grid Section */ } <
        div className = "gallery-grid-section" >
        <
        div className = "container" > {
            filteredImages.length > 0 ? ( <
                div className = "gallery-grid" > {
                    filteredImages.map((image) => ( <
                        div key = { image.id }
                        className = "gallery-card"
                        onClick = {
                            () => openLightbox(image) }
                        style = {
                            { borderTop: `4px solid ${image.color}` } } >
                        <
                        div className = "gallery-image-container" >
                        <
                        img src = { image.image }
                        alt = { image.alt }
                        className = "gallery-image" / >
                        <
                        div className = "gallery-overlay"
                        style = {
                            { background: `linear-gradient(to top, ${image.color}cc, transparent)` } } >
                        <
                        div className = "gallery-info" >
                        <
                        span className = "gallery-category-badge"
                        style = {
                            { backgroundColor: image.bgColor, color: image.color } } >
                        <
                        span className = "badge-icon" > { image.icon } < /span> <
                        span className = "badge-text" > { image.category } < /span> <
                        /span> <
                        h3 className = "gallery-title" > { image.title } < /h3> <
                        div className = "gallery-meta" >
                        <
                        span className = "meta-location" > 📍{ image.location } < /span> <
                        span className = "meta-date" > 📅{ image.date } < /span> <
                        /div> <
                        /div> <
                        /div> <
                        /div> <
                        /div>
                    ))
                } <
                /div>
            ) : ( <
                div className = "no-images" >
                <
                p > No images found in this category. < /p> <
                /div>
            )
        } <
        /div> <
        /div>

        { /* Lightbox */ } {
            selectedImage && ( <
                div className = "lightbox"
                onClick = { closeLightbox } >
                <
                div className = "lightbox-content"
                onClick = {
                    (e) => e.stopPropagation() } >
                <
                button className = "close-btn"
                onClick = { closeLightbox } > × < /button> <
                div className = "lightbox-image-container" >
                <
                img src = { selectedImage.image }
                alt = { selectedImage.alt }
                className = "lightbox-image" / >
                <
                /div> <
                div className = "lightbox-info"
                style = {
                    { borderTop: `4px solid ${selectedImage.color}` } } >
                <
                div className = "lightbox-category-badge"
                style = {
                    { backgroundColor: selectedImage.bgColor, color: selectedImage.color } } >
                <
                span className = "badge-icon" > { selectedImage.icon } < /span> <
                span className = "badge-text" > { selectedImage.category } < /span> <
                /div> <
                h2 > { selectedImage.title } < /h2> <
                div className = "lightbox-meta" >
                <
                p className = "lightbox-location" > 📍{ selectedImage.location } < /p> <
                p className = "lightbox-date" > 📅{ selectedImage.date } < /p> <
                /div> <
                /div> <
                /div> <
                /div>
            )
        } <
        /div>
    );
};

export default Gallery;