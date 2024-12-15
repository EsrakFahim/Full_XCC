import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'


const BlogPage =() => {
    return(
        <Fragment>
            
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
             
        </Fragment>
    )
};
export default BlogPage;

