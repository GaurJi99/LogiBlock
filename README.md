# HackTheBuild 2.0 💻
**Team:** LogiBlock

**Problem Statement:** "Blockchain for Improving the Efficiency of Defense Logistics and Supply Chain Operations."

TO DEVELOP A SYSTEM FOR LOGISTIC AND INVENTORY MANAGEMENT THAT USES BLOCKCHAIN TECHNOLOGY, INSTEAD OF TRADITIONAL METHODS. THE SYSTEM SHOULD MANAGE THE TRACING AND TRACKING OF DEFENSE ASSETS IN A SYSTEMATIC MANNER PROVIDING SECURE DECENTRALIZED LEDGER USING BLOCKCHAIN TECHNOLOGY.

**Tech Stack:** Ethereum Smart Contarct, ReactJs, Web3Js, Solidity, Metamask, JS

**Proposed Soltion**

An Inventory and Logistic Management Web based application using Blockchain and Smart Contacts :
* The flow of assets in the inventory is secured thorough a Smart Contract using wallet transactions on ethereum network. 
* The system will store details like Quantity, Manufacturer, Type etc. for each specific asset in the inventory.
* The web application enables user to manage the inventory by adding and updating the assets.
* For each change in asset condition, a transaction gets created and stored over blockchain.
* Real-Time Tracking helps in accessing and handling all the inventory items.

**This project has been Designed & Developed at IIT Jammu by Rutvik Gupta, Surabhi Gupta and Shubham Gaur for HacktheBuild 2.0

--------------------------------------------------------------------------------------------------------------------

### Setting up the Application LogiBlock

#### Installing Truffle Suite Framework

**Requirements:** NodeJS v8.9.4 or later and Windows/Linux/Mac OS X
* Installing using npm install -g truffle 

#### Installing Ganache (Local Ethereum Blockchain Server)
* Install from https://www.trufflesuite.com/ganache 

#### Setting up Metamask Wallet
MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.

* Step 1 : Go to Browser Web Store Extensions Section.
* Step 2 : Search MetaMask.
* Step 3 : Add MetaMask Extension.
* Step 4 : Once installed, go to Create a Wallet button and create a new wallet.
* Step 5 : Follow the provided directions to setup your account and save your secret phrase.
* Step 5 : In the networks section, add Network as http://127.0.0.1:7545 and Chain ID as 1337

#### Initializing Application LogiBlock

* Step 1 : Git Clon the LogiBlock Repo.
* Step 2 : Open Ganache in your system and QuickStart Ethereum Chain.
* Step 3 : In the LogiBlock Directory run truffle migrat -reset.
* Step 4 : Copy the private key of Account 1 from Ganache and paste in the Metawask Wallet (In the import account section)
* Step 5 : In a new terminal go to client directory and run 'npm start' after installing all required depndencies. (npm install) 
* Step 6 : LogiBlock Application is up and running on localhost:3000.
* Step 7 : You can now manage inventory securely and efficiently.


### Presentation Exaplaining Approach: https://docs.google.com/presentation/d/1lDT_jAUXJ3bQyI5OERfkOBIhVLHr1gxeo_t4C8-r8cc/edit?usp=sharing

*(SNAPSHOTS OF THE APPLICATION ARE ATTACHED IN THE PRESENTATION)*


