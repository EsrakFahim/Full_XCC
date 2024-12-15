import React, {Fragment} from 'react';

import Hero2 from '../../components/hero2';
import About2 from '../../components/about2';
import ProjectSectionS2 from '../../components/ProjectsS2';
import ServiceSection from '../../components/Services';
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import BlogSection from '../../components/BlogSection';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'



const HomePage2 =() => {
    return(
        <Fragment>
            
            <Hero2/>
            <About2/>
            <ServiceSection sClass={'section-bg'}/>
            <ProjectSectionS2/>
            <TeamSection/>
            <Testimonial/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage2;