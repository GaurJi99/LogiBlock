import React, { Component } from "react";
import { useState,useEffect } from "react";
import Login from "./components/login";
import "./App.css";
import PropTypes from 'prop-types';
import { init } from "./web3client";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App() {
  useEffect(() => {
    init();
  }, [])

    return (
      <div className="App">
          <Login/>
      </div>
    );
}

export default App;

