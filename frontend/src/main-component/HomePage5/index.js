import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero5 from '../../components/hero5';
import About from '../../components/about';
import ProjectSectionS4 from '../../components/ProjectsS4';
import ServiceSection3 from '../../components/Services3';
import Pricing from '../../components/Pricing';
import BlogSectionS2 from '../../components/BlogSectionS2';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'

import abimg from '../../images/about6.png'


const HomePage5 =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'}/>
            <Hero5/>
            <About abClass={'wpo-about-area-s5'} abimg={abimg}/>
            <ServiceSection3/>
            <ProjectSectionS4/>
            <Pricing pClass={'wpo-pricing-section-s2'}/>
            <BlogSectionS2/>
             
        </Fragment>
    )
};
export default HomePage5;