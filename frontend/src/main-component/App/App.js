import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { routes } from '../router'
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';



const App = () => {

return (
      <HelmetProvider>
            <div className="App" id="scrool">
                  <RouterProvider router={routes} />
                  <ToastContainer />
            </div>
      </HelmetProvider>
);
}

export default App;
