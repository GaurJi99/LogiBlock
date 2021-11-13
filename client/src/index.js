import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard';
import AddItem from './components/dashboard/additem-component';
import AddCatg from './components/dashboard/addcatg-component';
import AddQnty from './components/dashboard/addqnty-components';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const rootElement = document.getElementById("root");
ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/add-item" element={<AddItem />} />
      <Route path="/dashboard/add-catg" element={<AddCatg />} />
      <Route path="/dashboard/add-qnty" element={<AddQnty />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
