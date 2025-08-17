export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply?: number;
  max_supply?: number;
}

export const cryptoData: CryptoData[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    current_price: 43250.75,
    market_cap: 847630000000,
    market_cap_rank: 1,
    total_volume: 23450000000,
    price_change_percentage_24h: 2.45,
    circulating_supply: 19600000,
    max_supply: 21000000
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    current_price: 2580.32,
    market_cap: 310240000000,
    market_cap_rank: 2,
    total_volume: 15670000000,
    price_change_percentage_24h: -1.23,
    circulating_supply: 120280000,
    max_supply: 25006500
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    current_price: 1.00,
    market_cap: 91560000000,
    market_cap_rank: 3,
    total_volume: 45230000000,
    price_change_percentage_24h: 0.02,
    circulating_supply: 91560000000,
    max_supply: 3200004
  },
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    current_price: 315.67,
    market_cap: 47190000000,
    market_cap_rank: 4,
    total_volume: 1230000000,
    price_change_percentage_24h: 1.87,
    circulating_supply: 149530000,
    max_supply: 200000000
  },
  {
    id: 'solana',
    symbol: 'sol',
    name: 'Solana',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    current_price: 98.45,
    market_cap: 42890000000,
    market_cap_rank: 5,
    total_volume: 2340000000,
    price_change_percentage_24h: 5.23,
    circulating_supply: 435600000,
    max_supply: 6542000
  },
  {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USDC',
    image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
    current_price: 1.00,
    market_cap: 24780000000,
    market_cap_rank: 6,
    total_volume: 5670000000,
    price_change_percentage_24h: -0.01,
    circulating_supply: 24780000000,
    max_supply: 685646520
  },
  {
    id: 'xrp',
    symbol: 'xrp',
    name: 'XRP',
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
    current_price: 0.61,
    market_cap: 33210000000,
    market_cap_rank: 7,
    total_volume: 1890000000,
    price_change_percentage_24h: -2.15,
    circulating_supply: 54450000000,
    max_supply: 100000000000
  },
  {
    id: 'cardano',
    symbol: 'ada',
    name: 'Cardano',
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    current_price: 0.48,
    market_cap: 16890000000,
    market_cap_rank: 8,
    total_volume: 567000000,
    price_change_percentage_24h: 3.67,
    circulating_supply: 35190000000,
    max_supply: 45000000000
  },
  {
    id: 'dogecoin',
    symbol: 'doge',
    name: 'Dogecoin',
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
    current_price: 0.087,
    market_cap: 12340000000,
    market_cap_rank: 9,
    total_volume: 890000000,
    price_change_percentage_24h: 4.12,
    circulating_supply: 141890000000,
    max_supply: 65420330
  },
  {
    id: 'avalanche-2',
    symbol: 'avax',
    name: 'Avalanche',
    image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png',
    current_price: 38.92,
    market_cap: 14520000000,
    market_cap_rank: 10,
    total_volume: 456000000,
    price_change_percentage_24h: -0.89,
    circulating_supply: 373100000,
    max_supply: 720000000
  }
];