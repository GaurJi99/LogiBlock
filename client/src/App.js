import React, { Component } from "react";
import { useState,useEffect } from "react";
import Login from "./components/login";
import Tests from "./components/Tests";
import "./App.css";
import { init } from "./web3client";

function App(){
  




    return (
      <div className="App">
        <h1>Good to Go!</h1>
          {/* <Login loginadmin = {this.loginadmin}/> */}
          <Tests />
        
      </div>
    );
  }

export default App;
