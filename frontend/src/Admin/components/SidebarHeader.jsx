import { Link } from "react-router-dom";
import logo from "../assets/images/faviconGS.png";

const SidebarHeader = () => {
  return (
    <div className="sidebar-header">
      <div className="logo">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <span className="logo-text text-center pe-4">XCC</span>
        </Link>
      </div>
    </div>
  );
};

export default SidebarHeader;
