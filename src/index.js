import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode, faUserTie, faTasks, faEnvelope, faReply, faAddressBook, faChevronUp, faChevronDown, faCertificate, faAward, faChevronLeft, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, faLaptopCode, faUserTie, faTasks, faEnvelope, faReply, faAddressBook, faChevronDown, faChevronUp, faCertificate, faAward, faChevronLeft, faChevronRight, faHome);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <script src="../JS/Nav.js" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
