import React, { useState } from "react";
import Logo from "../../images/logo-2.svg";
import { Link } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";
import OurGallery from "../OurGallery/OurGallery";
import useFetchDataFromDB from "../../Api-Route/FetchData";

const Header2 = (props) => {
      const [isSidebarShow, setIsSidebarShow] = useState(false);

      // Fetch data using the custom hook
      const { data, isLoading, isError } = useFetchDataFromDB('projects');

      const sidebarHandler = () => {
            setIsSidebarShow(!isSidebarShow);
      };

      const ClickHandler = () => {
            window.scrollTo(10, 0);
      };

      const SubmitHandler = (e) => {
            e.preventDefault();
      };

      if (isLoading) {
            return <div>Loading...</div>;
      }

      if (isError) {
            return <div>Error fetching projects...</div>;
      }

      return (
            <header id="header">
                  <div className={`wpo-site-header ${props.hclass}`}>
                        <nav className="navigation navbar navbar-expand-lg navbar-light">
                              <div className="container-fluid">
                                    <div className="row align-items-center">
                                          <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                                <div className="mobail-menu">
                                                      <MobileMenu />
                                                </div>
                                          </div>
                                          <div className="col-lg-2 col-md-6 col-6">
                                                <div className="navbar-header">
                                                      <Link onClick={ClickHandler} className="navbar-brand" to="/">
                                                            <img src={Logo} alt="Logo" />
                                                      </Link>
                                                </div>
                                          </div>
                                          <div className="col-lg-9 col-md-1 col-1">
                                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                                      <button className="menu-close">
                                                            <i className="ti-close"></i>
                                                      </button>
                                                      <ul className="nav navbar-nav mb-2 mb-lg-0">
                                                            <li className="menu-item-has-children">
                                                                  <Link onClick={ClickHandler} to="/home">Home</Link>
                                                            </li>
                                                            <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                                            <li><Link to="/service">Service</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/project">Project</Link></li>
                                                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                                      </ul>
                                                </div>
                                          </div>
                                          <div className="col-lg-1 col-md-1 col-2">
                                                <div className="header-right">
                                                      <div className="header-right-menu-wrapper">
                                                            <div className="header-right-menu">
                                                                  <div className="right-menu-toggle-btn" onClick={sidebarHandler}>
                                                                        <span></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                  </div>
                                                                  <div className={`header-right-menu-wrap ${isSidebarShow ? "right-menu-active" : ""}`}>
                                                                        <button onClick={sidebarHandler} className="right-menu-close">
                                                                              <i className="ti-close"></i>
                                                                        </button>
                                                                        <div className="logo">
                                                                              <img style={{ width: "70%" }} src={Logo} alt="Logo" />
                                                                        </div>
                                                                        <div className="header-right-sec">
                                                                              <OurGallery data={data} ClickHandler={ClickHandler} />
                                                                              <div className="widget wpo-contact-widget">
                                                                                    <div className="widget-title">
                                                                                          <h3>Contact Us</h3>
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
                                                                              {/* <div className="widget newsletter-widget">
                                                                                    <div className="widget-title">
                                                                                          <h3>Newsletter</h3>
                                                                                    </div>
                                                                                    <form onSubmit={SubmitHandler}>
                                                                                          <div className="input-1">
                                                                                                <input type="email" className="form-control" placeholder="Email Address *" required />
                                                                                                <div className="submit clearfix">
                                                                                                      <button type="submit"><i className="ti-email"></i></button>
                                                                                                </div>
                                                                                          </div>
                                                                                    </form>
                                                                              </div> */}
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </nav>
                  </div>
            </header>
      );
};

export default Header2;
