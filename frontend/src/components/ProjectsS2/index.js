import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
import useFetchDataFromDB from '../../Api-Route/FetchData';

const ProjectSectionS2 = () => {
    const { data, isLoading, isError } = useFetchDataFromDB('projects')

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error...</div>
    }



    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



    return (
        <div className="wpo-project-area-s2 section-padding">
            <div className="container">
                <SectionTitle subTitle={'Featured Works'} MainTitle={'Our Projects'} />
                <div className="row align-items-center">
                    <div className="wpo-project-wrap">
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-grids gallery-container clearfix">
                                        {data?.data?.projects?.map((project, pot) => (
                                            <div className="grid" key={pot}
                                            >
                                                <div className="wpo-project-item">
                                                    <div className="wpo-project-img">
                                                        <img
                                                            src={project?.coverImage}
                                                            alt=""
                                                            style={
                                                                {
                                                                    width: "100%",
                                                                    aspectRatio: "1/1",
                                                                    objectFit: "cover"
                                                                }
                                                            }
                                                        />
                                                        <div className="left-border"></div>
                                                        <div className="right-border"></div>
                                                    </div>
                                                    <div className="wpo-project-text">
                                                        <h2><Link onClick={ClickHandler} to={`/project/${project._id}`}>{project.title}</Link></h2>
                                                        <span>{project.subTitle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSectionS2;

