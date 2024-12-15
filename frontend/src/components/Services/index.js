import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import SectionTitle from '../SectionTitle'




const ServiceSection = ({ props, services }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className={`wpo-service-area section-padding ${props?.sClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Our Capabilities'} MainTitle={'What We Do'} />
                <div className="row align-items-center">
                    {services?.map((service, sitem) => (
                        <div
                            style={{
                                minHeight: "450px",
                            }}
                            className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <i className={service.icon}></i>
                                <h2>{service?.title}</h2>
                                <p>{service?.description || 'lorem50'}</p>
                                <Link onClick={ClickHandler} to={`/service/${service._id}`}>Learn More...</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ServiceSection;