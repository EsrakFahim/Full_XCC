import React from "react";
import { Link } from 'react-router-dom'

const Hero5 =() => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-title">
                                        <h2>Best Furniture <br/>
                                            & Decor</h2>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="slide-btns">
                                        <Link className="theme-btn-s2" to="/project">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero5;