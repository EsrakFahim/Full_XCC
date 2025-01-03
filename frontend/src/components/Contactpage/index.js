import React from 'react';
import ContactForm from '../ContactFrom'


const Contactpage = () => {

    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-location"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <a
                                                href="https://www.google.com/maps/search/?api=1&query=1143+43rd+street,+Brooklyn,+New+York.+11219"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "black", textDecoration: "none" }} // Ensures links inherit white color
                                            >
                                                <i className="fi flaticon-location"></i> 1143, 43rd street, Brooklyn, New York. 11219
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <a
                                                href="mailto:Xavironconstructioncorp@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "black", textDecoration: "none" }}
                                            >
                                                <i className="fi flaticon-email"></i> Xavironconstructioncorp@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-telephone"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <a
                                                href="https://wa.me/16465749712"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "black", textDecoration: "none" }}
                                            >
                                                <i className="fi flaticon-telephone"></i> +1 6465749712
                                            </a>
                                            <br />
                                            <a
                                                href="https://wa.me/19298881352"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "black", textDecoration: "none" }}
                                            >
                                                +1 9298881352
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe title="Google Maps Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.480343459291!2d-73.99194969999999!3d40.64067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ad252951a09%3A0xed36a8648ab6e081!2s1143%2043rd%20St%2C%20Brooklyn%2C%20NY%2011219%2C%20USA!5e1!3m2!1sen!2sbd!4v1732730623953!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </section>
    )

}

export default Contactpage;
