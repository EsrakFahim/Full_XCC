import React, { Fragment } from 'react';

import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service'
import RelatedService from './related';
import Discuss from './discuss';
import ServiceSidebar from './sidebar';

import Footer from '../../components/footer';
import useFetchSingleData from '../../Api-Route/FetchSingleData';
import ContactForm from '../../components/ContactFrom';
import service from '../../images/banners/banner-4.jpg'
import MetaData from '../../components/MetaData/MetaData';


const ServiceSinglePage = (props) => {
    const { _id } = useParams()

    const { data, isLoading, isError } = useFetchSingleData('service', _id);

    const {
        approach,
        capabilities,
        coverImage,
        createdAt,
        icon,
        isActive,
        planning,
        relatedServices,
        seo,
        slug,
        title,
        updatedAt,
        workProcess,
    } = data?.data || {};



    if (!data) {
        return <div>Service not found</div>
    }
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>


    return (
          <Fragment>
                <MetaData
                      title={seo?.metaTitle}
                      description={seo?.metaDescription}
                      image={coverImage.url}
                      keywords={seo.keywords.join(", ")}
                />

                <div className="wpo-service-single-area section-padding">
                      <div className="container">
                            <div className="row">
                                  <div className="col-lg-8 col-12">
                                        <div className="wpo-service-single-wrap">
                                              <div className="wpo-service-single-item">
                                                    <div className="wpo-service-single-main-img">
                                                          <img
                                                                src={
                                                                      coverImage?.url
                                                                }
                                                                alt={
                                                                      coverImage?.altText
                                                                }
                                                                style={{
                                                                      width: "100%",
                                                                      aspectRatio:
                                                                            "16/9",
                                                                }}
                                                          />
                                                    </div>
                                                    <div className="wpo-service-single-title">
                                                          <h3>
                                                                {
                                                                      planning?.heading
                                                                }
                                                          </h3>
                                                    </div>
                                                    <p>
                                                          {
                                                                planning?.description
                                                          }
                                                    </p>
                                                    <div className="row mt-4">
                                                          <div className="col-md-6 col-sm-6 col-12">
                                                                <div className="wpo-p-details-img">
                                                                      <img
                                                                            src="assets/images/service-single/2.jpg"
                                                                            alt=""
                                                                      />
                                                                </div>
                                                          </div>
                                                    </div>
                                              </div>
                                              <div className="wpo-service-single-item list-widget">
                                                    <div className="wpo-service-single-title">
                                                          <h3>
                                                                Our Capabilities
                                                          </h3>
                                                    </div>
                                                    <p>
                                                          Massa volutpat odio
                                                          facilisis purus sit
                                                          elementum. Non, sed
                                                          velit dictum quam. Id
                                                          risus pharetra est, at
                                                          rhoncus, nec
                                                          ullamcorper tincidunt.
                                                          Id aliquet duis
                                                          sollicitudin diam.
                                                    </p>
                                                    <ul>
                                                          {capabilities?.map(
                                                                (
                                                                      capability,
                                                                      citem
                                                                ) => (
                                                                      <li
                                                                            key={
                                                                                  citem
                                                                            }
                                                                      >
                                                                            {
                                                                                  capability?.description
                                                                            }
                                                                      </li>
                                                                )
                                                          )}
                                                    </ul>
                                              </div>
                                              <div className="wpo-service-single-item">
                                                    <div className="wpo-service-single-title">
                                                          <h3>
                                                                {
                                                                      approach?.heading
                                                                }
                                                          </h3>
                                                    </div>
                                                    <ul>
                                                          {approach?.points?.map(
                                                                (
                                                                      approach,
                                                                      aitem
                                                                ) => (
                                                                      <li
                                                                            key={
                                                                                  aitem
                                                                            }
                                                                      >
                                                                            {
                                                                                  approach
                                                                            }
                                                                      </li>
                                                                )
                                                          )}
                                                    </ul>
                                              </div>
                                              <div className="wpo-service-single-item list-widget">
                                                    <div className="wpo-service-single-title">
                                                          <h3>
                                                                Our Work Process
                                                          </h3>
                                                    </div>
                                                    <ul>
                                                          {workProcess?.map(
                                                                (
                                                                      process,
                                                                      pitem
                                                                ) => (
                                                                      <li
                                                                            key={
                                                                                  pitem
                                                                            }
                                                                            style={{
                                                                                  display: "flex",
                                                                                  justifyContent:
                                                                                        "flex-start",
                                                                                  alignItems:
                                                                                        "center",
                                                                                  gap: "10px",
                                                                            }}
                                                                      >
                                                                            <span
                                                                                  style={{
                                                                                        fontWeight:
                                                                                              "bold",
                                                                                        textDecoration:
                                                                                              "underline",
                                                                                  }}
                                                                            >
                                                                                  {
                                                                                        process?.step
                                                                                  }{" "}
                                                                                  :
                                                                            </span>
                                                                            <span>
                                                                                  {
                                                                                        process?.description
                                                                                  }
                                                                            </span>
                                                                      </li>
                                                                )
                                                          )}
                                                    </ul>
                                              </div>
                                              {/* <RelatedService /> */}
                                              <Discuss />
                                        </div>
                                  </div>
                                  <ServiceSidebar />
                            </div>
                      </div>
                </div>
          </Fragment>
    );
};
export default ServiceSinglePage;
