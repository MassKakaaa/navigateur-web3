const Web3 = require('web3');

let web3;

// Vérifier si MetaMask ou un autre provider est disponible
if (typeof window !== "undefined" && window.ethereum) {
    web3 = new Web3(window.ethereum);
    console.log("MetaMask détecté !");
} else {
    console.log("Aucun wallet Web3 détecté.");
}

// Fonction pour connecter un wallet
async function connectWallet() {
    if (!web3) {
        alert("Aucun wallet Web3 détecté !");
        return;
    }

    try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Wallet connecté :", accounts[0]);
        return accounts[0];
    } catch (error) {
        console.error("Erreur de connexion au wallet :", error);
    }
}

module.exports = { web3, connectWallet };
