import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle'
import Services from '../../components/Services'
import MetaData from '../../components/MetaData/MetaData';
import useFetchDataFromDB from '../../Api-Route/FetchData';
import service from '../../images/banners/banner-5.jpg'



const ServicePage = () => {
    const { data, isLoading, isError } = useFetchDataFromDB('service');

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <Fragment>
            <MetaData title={'Services'} />
            <PageTitle pageTitle={'Services'} pagesub={'Services'} background={service} />
            <Services services={data?.data} />
        </Fragment>
    )
};
export default ServicePage;
