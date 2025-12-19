export default class APIs {
    async getCrypto(crypto) {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Błąd pobierania cen krypto:", error);
            return null;
        }

    }
}