window.onload = () => {
    // Ensure ethereum is accessible in the browser
    if (!ethereum || !window.ethereum) {
        let msg = "Please install the MetaMask extension";
        window.alert(msg);
        throw new Error(msg);
    }
    
    let connectButton = document.getElementById("connectButton");
    connectButton.onclick = async () => {
        try {
            await ethereum.request({method: "eth_requestAccounts"});
            connectButton.textContent = "Connected";
        } catch (err) {
            throw new Error(err.message);
        }
    }
};
