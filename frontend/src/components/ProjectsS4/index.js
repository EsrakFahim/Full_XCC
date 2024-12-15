import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import useFetchDataFromDB from '../../Api-Route/FetchData';
import SectionTitle3 from '../SectionTitle3';

const ProjectSectionS4 = ({black}) => {
    // Fetch data using the custom hook
    const { data: projects, isLoading, isError } = useFetchDataFromDB('projects');

    // Loading and error handling
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error...</div>;
    }

    // console.log(projects);

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className={`wpo-project-area ${black && 'black-bg '}`}>
                <SectionTitle3 black={black} subTitle={'Projects'} MainTitle={'Our latest projects'} />
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="wpo-project-wrap project-active owl-carousel">
                        <Slider {...settings}>
                            {projects?.data?.projects?.slice(0, 4).map((project, index) => (
                                <div className="wpo-project-item" key={index}>
                                    <div className="wpo-project-img">
                                        <img
                                            src={project.coverImage}
                                            alt={project.title}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "1/1",
                                                objectFit: "cover"
                                            }}
                                        />
                                        <div className="left-border"></div>
                                        <div className="right-border"></div>
                                    </div>
                                    <div className="wpo-project-text">
                                        <h2>
                                            <Link onClick={ClickHandler} to={`/project/${project._id}`}>
                                                {project.title}
                                            </Link>
                                        </h2>
                                        <span>{project.subTitle}</span>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSectionS4;
