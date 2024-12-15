import React, { Fragment } from 'react';

import PageTitle from '../../components/pagetitle'
import ProjectsS2 from '../../components/ProjectsS2'
import MetaData from '../../components/MetaData/MetaData';
import project from '../../images/banners/banner-3.jpg'


const ProjectPage = () => {
    return (
        <Fragment>
            <MetaData title={'Projects'} />
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'} background={project} />
            <ProjectsS2 />
        </Fragment>
    )
};
export default ProjectPage;
