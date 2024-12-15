import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import ServiceSection2 from '../../components/Services2'



const ServicePageS2 =() => {
    return(
        <Fragment>
            
            <PageTitle pageTitle={'Services'} pagesub={'Services'}/> 
            <ServiceSection2 srvClass={'title-v'}/>
             
        </Fragment>
    )
};
export default ServicePageS2;
