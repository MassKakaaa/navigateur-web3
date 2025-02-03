const axios = require('axios');

const OPENAI_API_KEY = "TA_CLE_API"; // Remplace par ta clé API OpenAI

async function askAI(question) {
    try {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-4",
            messages: [{ role: "user", content: question }],
        }, {
            headers: {
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            }
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Erreur avec l'IA :", error);
        return "Je ne peux pas répondre pour le moment.";
    }
}

module.exports = { askAI };
