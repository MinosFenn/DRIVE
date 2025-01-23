import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import TagManager from "react-gtm-module";
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop';
import { CarProvider } from './ContextCar';
import {EventProvider } from './ContextEvent';

import { IntlProvider } from 'react-intl';


const tagManagerArgs = {
  gtmId: "GTM-W3G8DQ8D", // Replace with your GTM ID
};

TagManager.initialize(tagManagerArgs);


ReactDOM.render(
  <IntlProvider locale="fr-FR">
    <EventProvider>
      <CarProvider>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </CarProvider>
    </EventProvider>
  </IntlProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
