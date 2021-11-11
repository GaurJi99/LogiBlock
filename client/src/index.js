import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Tests from './components/Tests';

const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tests" element={<Tests />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
