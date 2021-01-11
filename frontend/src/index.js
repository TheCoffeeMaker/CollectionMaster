import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './Layout/MainContainer';
import { Footer } from './Layout/Footer';

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
