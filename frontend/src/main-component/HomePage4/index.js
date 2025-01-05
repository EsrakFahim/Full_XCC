import React, { Fragment } from "react";
import Hero4 from "../../components/hero4";
import About4 from "../../components/about4";
import ProjectSectionS4 from "../../components/ProjectsS4";
import ServiceSection3 from "../../components/Services3";
import Pricing from "../../components/Pricing";
import BlogSectionS2 from "../../components/BlogSectionS2";
import MetaData from "../../components/MetaData/MetaData";

const HomePage4 = () => {


      return (
            <Fragment>
                  <MetaData
                        title="Home"
                  />

                  <Hero4 />
                  <About4 />
                  <ServiceSection3 ptClass={"pt-0"} />
                  <ProjectSectionS4 black={true} />
                  {/* <Pricing pClass={'wpo-pricing-section-s2'}/> */}
                  {/* <BlogSectionS2/> */}
            </Fragment>
      );
};
export default HomePage4;
