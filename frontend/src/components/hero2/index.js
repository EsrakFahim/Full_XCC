import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'



class Hero2 extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="wpo-box-style">
                <div className={`wpo-hero-slider wpo-hero-style-2 ${this.props.heroClass}`}>
                    <div className="hero-container">
                        <div className="hero-wrapper">
                            <Slider {...settings}>
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ backgroundImage: `url(${hero1})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Creating Your Dream</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo, habitant.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ backgroundImage: `url(${hero2})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Creating Your Dream</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo, habitant.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-slide">
                                    <div className="slide-inner" style={{ backgroundImage: `url(${hero3})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>Creating Your Dream</h2>
                                                </div>
                                                <div className="slide-title-sub">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo, habitant.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero2;