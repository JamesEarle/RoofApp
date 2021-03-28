// Imports must be at the top level of a module
// import detectEthereumProvider from '@metamask/detect-provider';

window.onload = () => {
    let hasConnected = false;
    // Ensure ethereum is accessible in the browser
    if (!ethereum || !window.ethereum) {
        let msg = "Please install the MetaMask extension";
        window.alert(msg);
        throw new Error(msg);
    }
    
    let connectButton = document.getElementById("connectButton");

    connectButton.textContent = ethereum.selectedAddress || "Connect Account";
    if (ethereum.selectedAddress) {
        connectButton.textContent = ethereum.selectedAddress;
    }
    connectButton.onclick = async () => {
        try {
            await ethereum.request({method: "eth_requestAccounts"});
            connectButton.textContent = "Connected";
            hasConnected = true;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    let submitButton = document.getElementById("submitButton");
    if (submitButton) {
        let gas = 352030;
        let gasPrice = 150000;
        let value = 5; // in GAN, or ETH
        submitButton.onclick = () => {
            let txParams = {
                nonce: '0x00', // ignored by MetaMask, leave empty
                gasPrice: '0x' + gasPrice.toString(16),
                gas: '0x' + gas.toString(16),
                to: '0x6864da716E5d52736E84508243A1D091e878A7a7', // Required except during contract publications.
                from: ethereum.selectedAddress, // must match user's active address.
                value: '0x' + value.toString(16), // Only required to send ether to the recipient from the initiating external account.
                data:
                    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
                chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
            };

            ethereum.request({
                method: "eth_sendTransaction",
                params: [txParams]
            })
        }   
    }
};
