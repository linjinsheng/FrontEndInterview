import React from 'react';
import ReactDOM from 'react-dom/client';
// import OnClickDemo from './OnClickDemo';
// import DomDemo from './DomDemo';
// import App from './App';
import RootDemo from './RootDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <OnClickDemo /> */}
    {/* <DomDemo /> */}
    <RootDemo />
    {/* <App /> */}
  </React.StrictMode>
);
