import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'


const BlogPageLeft =() => {
    return(
        <Fragment>
            
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
             
        </Fragment>
    )
};
export default BlogPageLeft;

