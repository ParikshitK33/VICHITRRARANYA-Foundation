import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

// Import your images
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        fade: true,
        cssEase: 'linear'
    };

    const slides = [{
            id: 1,
            image: slide1,
            alt: 'Slide 1'
        },
        {
            id: 2,
            image: slide2,
            alt: 'Slide 2'
        },
        {
            id: 3,
            image: slide3,
            alt: 'ESKCON SINGAPORE'
        }
    ];

    return ( <
        div className = "slider-container" >
        <
        Slider {...settings } > {
            slides.map((slide) => ( <
                div key = { slide.id }
                className = "slide" >
                <
                img src = { slide.image }
                alt = { slide.alt }
                className = "slide-image" / >
                <
                /div>
            ))
        } <
        /Slider> <
        /div>
    );
};

export default ImageSlider;