import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import useFetchDataFromDB from '../../Api-Route/FetchData'


const About = (props) => {
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
        <div className={`wpo-about-area section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
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
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
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
                            {/* <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;