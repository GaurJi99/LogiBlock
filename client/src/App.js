import React, { Component } from "react";
import { useState,useEffect } from "react";
import Login from "./components/login";
import Tests from "./components/Tests";
import "./App.css";
import PropTypes from 'prop-types';
import { init } from "./web3client";

function App() {
  useEffect(() => {
    init();
  }, [])
  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = SimpleStorageContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       SimpleStorageContract.abi,
  //       deployedNetwork && deployedNetwork.address,
  //     );
  //     console.log(typeof(instance))

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // loginadmin = async () => {
	// 	const { accounts, contract } = this.state;
	// 	// Get the value from the contract to prove it worked.
	// 	const res = await contract.methods.readauth().call();

  //   return res;


	//   };

    return (
      <div className="App">
        <h1>Good to Go!</h1>
          <Login/>
      </div>
    );
}

export default App;
