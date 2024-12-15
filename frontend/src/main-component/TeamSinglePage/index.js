import React, { Fragment } from 'react';

import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Teams from '../../api/team'
import Footer from '../../components/footer'
import useFetchSingleData from '../../Api-Route/FetchSingleData';
import member from '../../images/banners/team.jpg'



const TeamSinglePage = (props) => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useFetchSingleData("team-member", id)


    const {
        address,
        education,
        email,
        experience,
        languages,
        name,
        personalExperience,
        phone,
        position,
        profileImage,
        statistics,
    } = data?.data || {}

    console.log("TeamSinglePage data:", data?.data);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error: {error.message}</div>



    return (
        <Fragment>
            <PageTitle pageTitle={name} pagesub={position} background={member} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-info-img">
                                    <img style={{
                                        width: "100%",
                                        aspectRatio: '9/16',
                                        objectFit: "cover"
                                    }} src={profileImage?.imageUrl} alt={profileImage?.altText} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-info-text">
                                    <h2>{name}</h2>
                                    <ul>
                                        <li>Position: <span>{position}</span></li>
                                        <li>Practice Area:<span>{position}</span></li>
                                        <li>Experience:<span>{experience}</span></li>
                                        <li>Address:<span>{address}</span></li>
                                        <li>Phone:<span>{phone}</span></li>
                                        <li>Email:<span>{email}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personal Experience</h2>
                                    <p>{personalExperience}</p>
                                </div>
                                <div className="at-progress">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress yellow">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">99%</div>
                                                <div className="progress-name"><span>Client Satisfied</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress blue">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">210+</div>
                                                <div className="progress-name"><span>Happy Client</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress pink">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">431</div>
                                                <div className="progress-name"><span>Project Done</span></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                                            <div className="progress green">
                                                <span className="progress-left">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar"></span>
                                                </span>
                                                <div className="progress-value">95%</div>
                                                <div className="progress-name"><span>Success</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        {education?.map((edu, index) => (
                                            <li key={index}>
                                                {edu.degree}, {edu.institution}, {edu.year}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        {
                                            languages?.map((lang, index) => (
                                                <li key={index}>{lang}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {/* <div className="wpo-contact-area ex-wiget">
                                    <h2>Contact Me</h2>
                                    <div className="quote-form">
                                        <form onSubmit={SubmitHandler}>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Name:" name="name" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="email" className="form-control" placeholder="Email:" name="email" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Subject:" name="subject" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Your Address:" name="address" />
                                            </div>
                                            <div className="form-group full-col">
                                                <textarea className="form-control" name="note" placeholder="Description..."></textarea>
                                            </div>
                                            <div className="form-group full-col">
                                                <button className="btn theme-btn" type="submit">Get In Touch</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
export default TeamSinglePage;
