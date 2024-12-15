import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { routes } from '../router'
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import { baseApiURL } from '../../Constant/constant';



const App = () => {

      console.log(baseApiURL)


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
