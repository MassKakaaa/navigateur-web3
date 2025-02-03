const axios = require('axios');

// Liste noire de sites Web frauduleux (exemple)
const blacklist = [
    "scam-website.com",
    "fakecrypto.io",
    "phishing-wallet.net"
];

// Fonction pour vérifier si un site est sécurisé
function checkURLSafety(url) {
    return !blacklist.some(blockedSite => url.includes(blockedSite));
}

// Fonction pour sécuriser les transactions Web3
function secureTransaction(transaction) {
    if (!transaction || !transaction.to || !transaction.value) {
        console.error("Transaction invalide !");
        return false;
    }
    
    console.log("Transaction sécurisée :", transaction);
    return true;
}

// Vérification en ligne (via une API d’antiphishing)
async function isSafeOnline(url) {
    try {
        const response = await axios.get(`https://api.phishunt.io/check?url=${url}`);
        return response.data.safe;
    } catch (error) {
        console.error("Erreur lors de la vérification de sécurité :", error);
        return false;
    }
}

module.exports = { checkURLSafety, secureTransaction, isSafeOnline };
