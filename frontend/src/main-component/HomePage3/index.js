import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero3 from '../../components/hero3';
import About3 from '../../components/about3';
import ProjectSectionS3 from '../../components/ProjectsS3';
import ServiceSection2 from '../../components/Services2';
import FunFact from '../../components/FunFact';
import Pricing from '../../components/Pricing';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'



const HomePage3 =() => {
    return(
        <Fragment>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-2'}/>
            <Hero3/>
            <About3/>
            <ServiceSection2/>
            <FunFact/>
            <ProjectSectionS3/>
            <Pricing/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage3;