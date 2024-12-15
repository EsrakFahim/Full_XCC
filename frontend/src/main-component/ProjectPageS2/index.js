import React, {Fragment} from 'react';

import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Projects from '../../components/Projects'




const ProjectPageS2 =() => {
    return(
        <Fragment>
            
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}/> 
            <Projects pClass={'black-bg'}/>
             
        </Fragment>
    )
};
export default ProjectPageS2;
