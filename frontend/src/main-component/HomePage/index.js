import React, {Fragment} from 'react';

import Hero from '../../components/hero';
import About from '../../components/about';
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import FunFact from '../../components/FunFact';
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'

import abimg from '../../images/about.jpg'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={'header-style-1'}/>
            <Hero/>
            <About abimg={abimg}/>
            <ProjectSection/>
            <ServiceSection/>
            <FunFact/>
            <TeamSection/>
            <Testimonial/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;