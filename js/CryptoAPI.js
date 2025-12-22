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
            'BTC': 'Bitcoin',
            'ETH': 'Ethereum',
            'XRP': 'Ripple',
            'DODGE': 'Dogecoin',
            'USDT': 'Tether',
            'BNB': 'Binance Coin',
            'USDC': 'USD Coin',
            'SOL': 'Solana',
            'TRX': 'TRON',
            'ADA': 'Cardano'
        };
    }

}