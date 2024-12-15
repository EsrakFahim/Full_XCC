import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Scrollbar from '../../components/scrollbar'
import Footer from '../../components/footer';


const BlogDetailsFull =() => {
    return(
        <Fragment>
            
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
             
        </Fragment>
    )
};
export default BlogDetailsFull;