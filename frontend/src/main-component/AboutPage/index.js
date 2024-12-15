import React, { Fragment } from 'react';

import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';

import MetaData from '../../components/MetaData/MetaData';
import ProjectSectionS4 from '../../components/ProjectsS4';
import aboutBanner from '../../images/banners/banner-2.jpg';

const AboutPage = () => {
    return (
        <Fragment>
            <MetaData title='About Us' />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} background={aboutBanner} />
            <About />
            {/* <ProjectSection /> */}
            <ProjectSectionS4 />
            <ServiceSection />
            <FunFact fnClass={'wpo-fun-fact-section-s2'} />
            {/* <Pricing /> */}
            <TeamSection />
            <Testimonial />
        </Fragment>
    )
};
export default AboutPage;
