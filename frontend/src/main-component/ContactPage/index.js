import React, { Fragment } from 'react';

import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import MetaData from '../../components/MetaData/MetaData';
import contact from '../../images/banners/contact.jpg'


const ContactPage = () => {
    return (
        <Fragment>
            <MetaData title={'Contact Us'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} background={contact} />
            <Contactpage />
        </Fragment>
    )
};
export default ContactPage;

