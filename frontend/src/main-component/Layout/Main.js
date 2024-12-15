import React from 'react';
import Navbar2 from '../../components/Navbar2';
import Logo from '../../images/logo.svg';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar';


const Main = () => {
      return (
            <div>
                  <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'} />
                  <div style={{
                        minHeight: "100vh",
                        // paddingTop: "100px"
                  }}>
                        <Outlet />
                  </div>
                  <Footer ftClass={'wpo-site-footer-s2'} />
                  <Scrollbar />
            </div>
      );
};

export default Main;