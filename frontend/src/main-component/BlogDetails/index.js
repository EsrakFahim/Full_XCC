import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer';



const BlogDetails =() => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    return(
        <Fragment>
            
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
             <BlogSingle/>
              
        </Fragment>
    )
};
export default BlogDetails;
