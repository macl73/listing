import React from 'react';
import PropTypes from 'prop-types';
import './main.css';
import etsy from './etsy.json';
import Listing from "./components/Listing.js";

const products = etsy;

function App() {
  return (
    <Listing items={products}/>
  );
};

App.propTypes = {
  items: PropTypes.array
};

export default App;
