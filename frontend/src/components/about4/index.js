import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/about5.jpg'
import abimg2 from '../../images/about-shape3.png'
import useFetchDataFromDB from '../../Api-Route/FetchData'


const About4 = (props) => {
    const { data, isLoading, isError } = useFetchDataFromDB('about-page');

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    const {
        title,
        description,
        whyUsTitle,
        image
    } = data?.data;


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="wpo-about-area-s4 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img
                                src={image?.imageUrl}
                                alt={image?.altText}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className="wpo-about-img-text">
                                <h2>25+</h2>
                                <p>Years of Experience</p>
                                <div className="about-shape">
                                    <img src={abimg2} alt="" />
                                </div>
                            </div>
                            <div className="left-shape">
                                <div className="square-shape"></div>
                                <div className="shape-top">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="shape-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Us</span>
                                <h2>
                                    {
                                        title
                                    }
                                </h2>
                            </div>
                            <h5>
                                {
                                    whyUsTitle
                                }
                            </h5>
                            <p>
                                {
                                    description
                                }
                            </p>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                {/* <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invisible-title1">
                <h2>About</h2>
            </div>
        </div>
    )
}

export default About4;