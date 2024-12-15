import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-4.png';
import hero3 from '../../images/slider/slide-5.jpg';
import hero2 from '../../images/slider/slide-6.jpg';
import useFetchDataFromDB from "../../Api-Route/FetchData";

const sliderData = [
    {
        id: 1,
        title: 'Xaviron Construction Company',
        image: hero1,
    },
    {
        id: 2,
        title: 'Xaviron Construction Company',
        image: hero2,
    },
    {
        id: 3,
        title: 'Xaviron Construction Company',
        image: hero3,
    }
];

const Hero4 = () => {

    // Fetch data using the custom hook
    const { data, isLoading, isError } = useFetchDataFromDB('projects');

    // Loading and error handling
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }


    if (!data) {
        return <div>No data found... <Link to={`/admin`} style={{color:'skyblue'}} >Add Projects and more</Link></div>;
    }

    const activeProjects = data?.data?.projects?.filter(project => project.isSliderActive);


    // console.log(data);

    const settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="wpo-hero-slider wpo-hero-style-3">
            <div className="wpo-line-animated">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        {
                            activeProjects?.map((item, _idx) => (
                                <div key={_idx} className="hero-slide">
                                    <div className="slide-inner" style={{ backgroundImage: `url(${item?.coverImage})` }}>
                                        <div className="container-fluid">
                                            <div className="slide-content">
                                                <div className="slide-title">
                                                    <h2>{item?.title}</h2>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div className="slide-btns">
                                                    <Link to={`/project/${item?._id}`} className="theme-btn">Learn More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero4;
