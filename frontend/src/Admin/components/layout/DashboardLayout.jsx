import { useRef } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import '../../scss/style.scss';

const DashboardLayout = ({ children }) => {
      const sidebarRef = useRef(null);
      return (
            <div className="main-container">
                  <Sidebar ref={sidebarRef} />
                  <div className="main">
                        <Header sidebarRef={sidebarRef} />
                        {children}
                  </div>
            </div>
      );
}

export default DashboardLayout