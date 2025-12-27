export default class CryptoAPI {

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
    checkingIfCryptoExists() {
        return {
            'BTC': 'bitcoin',
            'ETH': 'ethereum',
            'XRP': 'ripple',
            'DOGE': 'dogecoin',
            'USDT': 'tether',
            'BNB': 'binancecoin',
            'USDC': 'usd-coin',
            'SOL': 'solana',
            'TRX': 'tron',
            'ADA': 'cardano'
        };
    }
}