import React from "react";
import { Helmet } from "react-helmet-async";
import logo from "../../images/logo-2.svg";

const MetaData = ({
      title,
      description = "Xaviron Construction Corp is a leading construction company specializing in high-quality residential and commercial projects. We bring expertise, precision, and reliability to every project, from new builds to renovations. Contact us to bring your vision to life!",
      canonical,
      keywords = "construction, renovation, residential projects, commercial construction, building experts, Xaviron Construction Corp",
      robots = "index, follow",
      image = logo,
}) => {
      const defaultTitle =
            "Xaviron Construction Corp | Trusted Experts in Residential & Commercial Construction";
      const titleSuffix = " | Xaviron Construction Corp";

      // If a title is provided, use it with the suffix, else use the default title.
      const pageTitle = title ? `${title}${titleSuffix}` : defaultTitle;
      const currentUrl = canonical || window.location.href;

      return (
            <Helmet>
                  {/* Basic SEO */}
                  <title>{pageTitle}</title>
                  <meta name="description" content={description} />
                  <meta name="keywords" content={keywords} />
                  <link rel="canonical" href={currentUrl} />
                  <meta name="robots" content={robots} />

                  {/* Open Graph (OG) Tags */}
                  <meta property="og:title" content={pageTitle} />
                  <meta property="og:description" content={description} />
                  <meta property="og:url" content={currentUrl} />
                  <meta property="og:type" content="website" />
                  <meta property="og:image" content={image} />

                  {/* Twitter Card Tags */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={pageTitle} />
                  <meta name="twitter:description" content={description} />
                  <meta name="twitter:image" content={image} />

                  {/* Accessibility & Mobile */}
                  <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                  />
                  <meta charSet="utf-8" />
            </Helmet>
      );
};

export default MetaData;
