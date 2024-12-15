import { Helmet } from "react-helmet-async";

function MetaData({ title = "Dashboard" }) {
  return (
    <Helmet>
      <title>{`${title} | Xaviron Construction Corp`}</title>
    </Helmet>
  );
}

export default MetaData;
