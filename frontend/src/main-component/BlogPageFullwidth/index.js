import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import BlogList from '../../components/BlogList'


const BlogPageFullwidth =() => {
    return(
        <Fragment>
            
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
             
        </Fragment>
    )
};
export default BlogPageFullwidth;

