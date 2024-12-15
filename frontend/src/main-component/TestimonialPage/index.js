import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Testimonial from '../../components/Testimonial'
import MetaData from '../../components/MetaData/MetaData';



const TestimonialPage =() => {
    return(
        <Fragment>
            <MetaData title={'Testimonial'}/>
            <PageTitle pageTitle={'Testimonilal'} pagesub={'Testimonilal'}/> 
            <Testimonial tClass="style-2"/>
             
        </Fragment>
    )
};
export default TestimonialPage;
