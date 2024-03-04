import React from 'react';
import ReactDOM from 'react-dom/client';
// import ParentToSon from './ParentToSon';
// import SonToParent from './SonToParent';
// import BrotherToBrother from './BrotherToBrother';
// import BrotherAndBrother from './BrotherAndBrother';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ParentToSon /> */}
    {/* <SonToParent /> */}
    {/* <BrotherToBrother /> */}
    {/* <BrotherAndBrother /> */}
    <Context />
  </React.StrictMode>
);