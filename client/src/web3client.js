import SimpleStorage from './contracts/SimpleStorage.json';
import Web3 from 'web3';


let selectedAccount;
let simple;
let isInitialized = false;

export const init = async () => {
	let provider = window.ethereum;
    
	if (typeof provider !== 'undefined') {
		provider
			.request({ method: 'eth_requestAccounts' })
			.then((accounts) => {
				selectedAccount = accounts[0];
				console.log(`Selected account is ${selectedAccount}`);
			})
			.catch((err) => {
				console.log(err);
				return;
			});

		window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
	}
    const web3 = new Web3(provider);

	const networkId = await web3.eth.net.getId();
    console.log(networkId,web3)
	simple = new web3.eth.Contract(
		SimpleStorage.abi,
		SimpleStorage.networks[networkId].address
	);
    isInitialized = true;
}

export const  loginadmin = async () => {
    if ( !isInitialized) {
        await init(); 
    }
		
    // Get the value from the contract to prove it worked.
    return simple.methods.readauth().call();
};