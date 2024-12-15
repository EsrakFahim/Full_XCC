// MetaData.js
import React from "react";
import { Helmet } from "react-helmet-async";

function MetaData({
      title = "Xaviron Construction Corp | Trusted Experts in Residential & Commercial Construction",
      description = "Xaviron Construction Corp is a leading construction company specializing in high-quality residential and commercial projects. We bring expertise, precision, and reliability to every project, from new builds to renovations. Contact us to bring your vision to life!",
      canonical = window.location.href,
      keywords = "construction, renovation, residential projects, commercial construction, building experts, Xaviron Construction Corp",
      robots = "index,follow",
      image = "https://yourwebsite.com/default-image.jpg", // for social sharing
}) {
    const titleSuffix = " | Xaviron Construction Corp";
      return (
            <Helmet>
                  {/* Basic SEO */}
                  <title>{`${title}${titleSuffix}`}</title>
                  <meta name="description" content={description} />
                  <meta name="keywords" content={keywords} />
                  <link rel="canonical" href={canonical} />
                  <meta name="robots" content={robots} />

                  {/* Open Graph (OG) tags for social sharing */}
                  <meta
                        property="og:title"
                        content={`${title} - ${titleSuffix}`}
                  />
                  <meta property="og:description" content={description} />
                  <meta property="og:url" content={canonical} />
                  <meta property="og:type" content="website" />
                  <meta property="og:image" content={image} />

                  {/* Twitter Card tags */}
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta
                        name="twitter:title"
                        content={`${title} - ${titleSuffix}`}
                  />
                  <meta name="twitter:description" content={description} />
                  <meta name="twitter:image" content={image} />

                  {/* Additional SEO Tags */}
                  <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                  />
            </Helmet>
      );
}

export default MetaData;
