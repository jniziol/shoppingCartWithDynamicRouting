import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Store';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Store />
  </BrowserRouter>
  , document.getElementById('root'));