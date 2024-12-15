import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hImg1 from '../../images/slider/s2.jpg'
import hImg2 from '../../images/slider/s3.jpg'
import hImg3 from '../../images/slider/s4.jpg'
import hImg4 from '../../images/slider/s2.jpg'



class Hero3 extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <section className="static-hero-s2">
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-6 col-md-7 col-12">
                                    <div className="wpo-static-hero-inner">
                                        <div className="slide-title">
                                            <h2>Best
                                            Interior
                                            Design</h2>
                                        </div>
                                        <div className="slide-btns">
                                            <Link to="/about">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-6 col-md-5 col-12">
                                    <div className="static-hero-slide-img owl-carousel">
                                        <Slider {...settings}>
                                            <div className="slide-img">
                                                <img src={hImg1} alt="" />
                                            </div>
                                            <div className="slide-img">
                                                <img src={hImg2} alt="" />
                                            </div>
                                            <div className="slide-img">
                                                <img src={hImg3} alt="" />
                                            </div>
                                            <div className="slide-img">
                                                <img src={hImg4} alt="" />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero3;