import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Pricing from '../../components/Pricing'
import MetaData from '../../components/MetaData/MetaData';




const PricingPage =() => {
    return(
        <Fragment>
            <MetaData title={'Pricing'}/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <Pricing pClass={'title-off'}/>
             
        </Fragment>
    )
};
export default PricingPage;
