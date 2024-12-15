import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../SectionTitle'
import useFetchDataFromDB from '../../Api-Route/FetchData'



const TeamSection = (props) => {
    const { data, isLoading, isError } = useFetchDataFromDB('team-member');

    // console.log("TeamSection data:", data?.data);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>


    return (

        <section className="wpo-team-section section-padding">
            <div className="container">
                <SectionTitle subTitle={'OUR PROFESSIONALS'} MainTitle={'Meet Our Team'} />
                <div className="wpo-team-wrap">
                    <div className="row">
                        {data?.data?.map((team, aitem) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={aitem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <img style={{
                                            width: "100%",
                                            // height: "300px",
                                            aspectRatio: '12/16',
                                            objectFit: "cover"
                                        }} src={team.profileImage?.imageUrl} alt={team?.profileImage?.altText} />
                                        <Link onClick={ClickHandler} to={`/member/${team._id}`}><i className="ti-plus"></i></Link>
                                    </div>
                                    <div className="wpo-team-text">
                                        <h3><Link onClick={ClickHandler} to={`/member/${team._id}`}>{team.name}</Link></h3>
                                        <span>{team?.position}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TeamSection;