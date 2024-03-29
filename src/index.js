import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './store';
import {Provider} from 'react-redux'
import { RouterProvider } from "react-router-dom";
import { Router } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);

