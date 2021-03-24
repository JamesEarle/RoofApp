window.onload = () => {

    if (!ethereum || !window.ethereum) {
        throw new Error("Please install MetaMask");
    }

    // Mainnet ID
    if (ethereum.chainId === "0x1") {
        let message = "You must be on a test network";
        window.alert(message);
        throw new Error(message);
    }

    // Contract location on Kovan test network
    const CONTRACT_ADDRESS = "0x084Ab5590AC815119Fd9f3105D0e250699a16d5F";
    // https://kovan.etherscan.io/tx/0x9718de80e41ebbdc565898c8d19fdba9a79acb796a1a52755565734f7ca260d2

    // Declare variables at top level scope
    let contract;
    let userAddress;

    console.log("MetaMask is installed");

    // Get connection elements
    let addressSpan = document.getElementById("address");
    let connectAccountButton = document.getElementById("connectAccount");

    // Prompt for connection with MetaMask
    connectAccountButton.onclick = async () => {
        userAddress = await ethereum.request({
            method: "eth_requestAccounts"
        });

        addressSpan.textContent = userAddress;
    }

    document.getElementById("setButton").onclick = async () => {

        console.log("Ethereum requesting 'set'");

        paramsObj = {
            // From address is MetaMask address
            from: "0x955A52f4F067cB1B5eC7B136995f93A82d3eb3bD", //addressSpan.textContent,
            to: "0x084Ab5590AC815119Fd9f3105D0e250699a16d5F",
            gas: "20000", //'0x76c0', // 30400
            gasPrice: "20000", // '0x9184e72a000', // 10000000000000
            value: '0x9184e72a', // 2441406250
            data: "0x60fe47b10000000000000000000000000000000000000000000000000000000000000017" // 23
        }

        let res = await ethereum.request({
            method: "eth_sendTransaction",
            params: [paramsObj]
        });
        console.log(res)
    }
}