import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import './sass/style.scss';

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";



const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();


root.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </QueryClientProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(// console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
