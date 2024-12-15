import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo-2.svg'
import Projects from '../../api/project'
import useFetchDataFromDB from '../../Api-Route/FetchData'
import OurGallery from '../OurGallery/OurGallery'



const Footer = (props) => {
    const { data, isLoading, isError } = useFetchDataFromDB('projects')
    const { data: serviceData, isLoading: serviceLoading, isError: serviceError } = useFetchDataFromDB('service');


    if (isLoading || serviceLoading) {
        return <div>Loading...</div>
    }

    if (isError || serviceError) {
        return <div>Error...</div>
    }


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className={`wpo-site-footer ${props.ftClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt="" /></Link>
                                </div>
                                <p>
                                    Xaviron Construction Corp delivers exceptional construction services, specializing in residential and commercial projects. We prioritize quality, innovation, and client satisfaction, building spaces that inspire and exceed expectations.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    {
                                        serviceData?.data?.map(({ _id, title }) => (
                                            <li><Link onClick={ClickHandler} to={`/service/${_id}`}>{
                                                title
                                            }</Link></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul
                                        style={{
                                            listStyleType: "none", // Removes default list styles
                                            padding: 0, // Resets padding
                                            margin: 0, // Resets margin
                                            color: "white" // Sets the text color to white
                                        }}
                                    >
                                        <li>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=1143+43rd+street,+Brooklyn,+New+York.+11219"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "white", textDecoration: "none" }} // Ensures links inherit white color
                                            >
                                                <i className="fi flaticon-location"></i> 1143, 43rd street, Brooklyn, New York. 11219
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://wa.me/16465749712"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "white", textDecoration: "none" }}
                                            >
                                                <i className="fi flaticon-telephone"></i> +1 6465749712
                                            </a>
                                            <br />
                                            <a
                                                href="https://wa.me/19298881352"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "white", textDecoration: "none" }}
                                            >
                                                +1 9298881352
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="mailto:Xavironconstructioncorp@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "white", textDecoration: "none" }}
                                            >
                                                <i className="fi flaticon-email"></i> Xavironconstructioncorp@gmail.com
                                            </a>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <OurGallery
                                data={data}
                                ClickHandler={ClickHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <ul>
                                <li>&copy; 2022 XCC Template. Design By <Link onClick={ClickHandler} to="/">wpOceans</Link>. All Rights
                                    Reserved.</li>
                                <li><Link onClick={ClickHandler} to="/">Terms of use |</Link> <Link onClick={ClickHandler} to="/">Privacy Environmental Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer;