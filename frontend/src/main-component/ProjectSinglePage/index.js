import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle";
import { useParams } from "react-router-dom";
import Projects from "../../api/project";
import RelatedProject from "./related";
import Discuss from "./discuss";
import useFetchSingleData from "../../Api-Route/FetchSingleData";
import project from "../../images/banners/banner-3.jpg";
import MetaData from "../../components/MetaData/MetaData";

const ProjectSinglePage = (props) => {
      const { _id } = useParams();

      // console.log(_id)
      const { data, isLoading, isError } = useFetchSingleData("projects", _id);

      const {
            // data
            title,
            description,
            client,
            createdAt,
            endDate,
            location,
            projectDuration,
            projectType,
            approach,
            receivedGoals,
            results,
            seo,
            coverImage,
            showcaseImages,
            strategies,
            testimonial,
      } = data?.data || {};

      return (
            <Fragment>
                  <MetaData
                        title={seo?.title}
                        description={seo?.metaDescription}
                        image={coverImage}
                        keywords={seo?.metaKeywords?.join(", ") || ""}
                  />

                  <PageTitle
                        pageTitle={title}
                        pagesub="Project"
                        background={project}
                  />

                  <div className="wpo-project-single-area section-padding">
                        <div className="container">
                              <div className="row justify-content-center">
                                    <div className="col-lg-10 col-12">
                                          <div className="wpo-project-single-wrap">
                                                <div className="wpo-project-single-item">
                                                      <div className="row align-items-center">
                                                            <div className="col-lg-7">
                                                                  <div className="wpo-project-single-title">
                                                                        <h3>
                                                                              {
                                                                                    title
                                                                              }{" "}
                                                                              Project
                                                                        </h3>
                                                                  </div>
                                                                  <p>
                                                                        {
                                                                              description
                                                                        }
                                                                  </p>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                  <div className="wpo-project-single-content-des-right">
                                                                        <ul>
                                                                              <li>
                                                                                    Location
                                                                                    :
                                                                                    <span>
                                                                                          {
                                                                                                location
                                                                                          }
                                                                                    </span>
                                                                              </li>
                                                                              <li>
                                                                                    Client
                                                                                    :
                                                                                    <span>
                                                                                          {
                                                                                                client
                                                                                          }
                                                                                    </span>
                                                                              </li>
                                                                              {/* <li>Architect :<span>{}</span></li> */}
                                                                              <li>
                                                                                    Project
                                                                                    Type
                                                                                    :
                                                                                    <span>
                                                                                          {
                                                                                                projectType
                                                                                          }
                                                                                    </span>
                                                                              </li>
                                                                              <li>
                                                                                    Duration
                                                                                    :
                                                                                    <span>
                                                                                          {
                                                                                                projectDuration
                                                                                          }
                                                                                    </span>
                                                                              </li>
                                                                              <li>
                                                                                    Completion:{" "}
                                                                                    <span>
                                                                                          {new Date(
                                                                                                endDate
                                                                                          ).toLocaleDateString(
                                                                                                "en-US",
                                                                                                {
                                                                                                      year: "numeric",
                                                                                                      month: "long",
                                                                                                      day: "numeric",
                                                                                                }
                                                                                          )}
                                                                                    </span>
                                                                              </li>

                                                                              {/* <li>Share :<span>Architectural, Business</span></li> */}
                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="wpo-project-single-main-img">
                                                            <img
                                                                  src={
                                                                        coverImage
                                                                  }
                                                                  alt=""
                                                                  style={{
                                                                        width: "100%",
                                                                        aspectRatio:
                                                                              "16/9",
                                                                        objectFit:
                                                                              "cover",
                                                                  }}
                                                            />
                                                      </div>
                                                      <div className="wpo-project-single-item list-widget">
                                                            <div className="row">
                                                                  <div className="col-lg-6">
                                                                        <div className="wpo-project-single-title">
                                                                              <h3>
                                                                                    Our
                                                                                    Strategies
                                                                              </h3>
                                                                        </div>
                                                                        <p>
                                                                              Massa
                                                                              volutpat
                                                                              odio
                                                                              facilisis
                                                                              purus
                                                                              sit
                                                                              elementum.
                                                                              Non,
                                                                              sed
                                                                              velit
                                                                              dictum
                                                                              quam.
                                                                              Id
                                                                              risus
                                                                              pharetra
                                                                              est,
                                                                              at
                                                                              rhoncus,
                                                                              nec
                                                                              ullamcorper
                                                                              tincidunt.
                                                                              Id
                                                                              aliquet
                                                                              duis
                                                                              sollicitudin
                                                                              diam.
                                                                        </p>
                                                                        <ul>
                                                                              {strategies?.map(
                                                                                    (
                                                                                          strategy,
                                                                                          index
                                                                                    ) => (
                                                                                          <li
                                                                                                key={
                                                                                                      index
                                                                                                }
                                                                                          >
                                                                                                {
                                                                                                      strategy
                                                                                                }
                                                                                          </li>
                                                                                    )
                                                                              )}
                                                                        </ul>
                                                                  </div>
                                                                  <div className="col-lg-6">
                                                                        <div className="wpo-project-single-item-quote">
                                                                              <p>
                                                                                    "
                                                                                    {
                                                                                          testimonial?.reviewBody
                                                                                    }

                                                                                    "
                                                                              </p>
                                                                              <span>
                                                                                    {
                                                                                          testimonial?.author
                                                                                    }
                                                                              </span>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="wpo-project-single-item">
                                                            <div className="wpo-project-single-title">
                                                                  <h3>
                                                                        Our
                                                                        approach
                                                                  </h3>
                                                            </div>
                                                            <p>{approach}</p>
                                                      </div>
                                                      <div className="wpo-project-single-gallery">
                                                            <div className="row mt-4">
                                                                  {showcaseImages
                                                                        ?.slice(
                                                                              0,
                                                                              2
                                                                        )
                                                                        ?.map(
                                                                              (
                                                                                    image,
                                                                                    index
                                                                              ) => (
                                                                                    <div
                                                                                          key={
                                                                                                index
                                                                                          }
                                                                                          className="col-md-6 col-sm-6 col-12"
                                                                                    >
                                                                                          <div className="wpo-p-details-img">
                                                                                                <img
                                                                                                      src={
                                                                                                            image?.url
                                                                                                      }
                                                                                                      alt=""
                                                                                                      style={{
                                                                                                            width: "100%",
                                                                                                            aspectRatio:
                                                                                                                  "1/1",
                                                                                                            objectFit:
                                                                                                                  "cover",
                                                                                                      }}
                                                                                                />
                                                                                          </div>
                                                                                    </div>
                                                                              )
                                                                        )}
                                                            </div>
                                                      </div>
                                                      <div className="wpo-project-single-item list-widget">
                                                            <div className="row">
                                                                  <div className="col-lg-6">
                                                                        <div className="wpo-project-single-title">
                                                                              <h3>
                                                                                    Resieved
                                                                                    goals
                                                                              </h3>
                                                                        </div>
                                                                        <ul>
                                                                              {receivedGoals?.map(
                                                                                    (
                                                                                          goal,
                                                                                          index
                                                                                    ) => (
                                                                                          <li
                                                                                                key={
                                                                                                      index
                                                                                                }
                                                                                          >
                                                                                                {
                                                                                                      goal
                                                                                                }
                                                                                          </li>
                                                                                    )
                                                                              )}
                                                                        </ul>
                                                                  </div>
                                                                  <div className="col-lg-6 list-widget-s">
                                                                        <div className="wpo-project-single-title">
                                                                              <h3>
                                                                                    Results
                                                                              </h3>
                                                                        </div>
                                                                        <ul>
                                                                              {results?.map(
                                                                                    (
                                                                                          result,
                                                                                          index
                                                                                    ) => (
                                                                                          <li
                                                                                                key={
                                                                                                      index
                                                                                                }
                                                                                          >
                                                                                                {
                                                                                                      result
                                                                                                }
                                                                                          </li>
                                                                                    )
                                                                              )}
                                                                        </ul>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <RelatedProject />
                                                      <Discuss />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Fragment>
      );
};
export default ProjectSinglePage;
