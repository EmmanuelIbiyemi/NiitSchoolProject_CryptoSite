import React , { useRef }from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';
import { cryptoData } from '../data/cryptoData';


// -- For the candle stick chart
import { createChart , CandlestickSeries  } from 'lightweight-charts';


const CoinDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const coin = cryptoData.find(c => c.id === id);

  // This is for the chart to see
  const chartShow = useRef<HTMLDivElement>(null);
 
  
  React.useEffect(() => {
    if (!chartShow.current) return;

    const chart = createChart(chartShow.current, {
      width: chartShow.current.clientWidth,
      height: 300,
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderVisible: false,
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    candlestickSeries.setData([
      { open: 10, high: 10.63, low: 9.49, close: 9.55, time: '2022-01-17' },
      { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: '2022-01-18' },
      { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: '2022-01-19' },
      { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: '2022-01-20' },
      { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: '2022-01-21' },
    ]);


    chart.timeScale().fitContent();

    // Optional: clean up chart on unmount
    return () => chart.remove();
  }, []);


  if (!coin) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Coin not found</h1>
          <Link
            to="/market"
            className="text-blue-400 hover:text-blue-300 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Market</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link
        to="/market"
        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Market</span>
      </Link>

      {/* Coin Header */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 mb-8">
        <div className="flex items-center space-x-6">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-20 h-20 rounded-full"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-2">{coin.name}</h1>
            <p className="text-gray-400 text-lg">{coin.symbol.toUpperCase()}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white mb-2">
              ${coin.current_price.toLocaleString()}
            </div>
            <div className={`flex items-center space-x-1 justify-end ${
              coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {coin.price_change_percentage_24h >= 0 ? (
                <TrendingUp className="h-5 w-5" />
              ) : (
                <TrendingDown className="h-5 w-5" />
              )}
              <span className="text-lg font-medium">
                {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm mb-2">Market Cap</h3>
          <p className="text-2xl font-bold text-white">${coin.market_cap.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm mb-2">24h Volume</h3>
          <p className="text-2xl font-bold text-white">${coin.total_volume.toLocaleString()}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm mb-2">Circulating Supply</h3>
          <p className="text-2xl font-bold text-white">{coin.circulating_supply?.toLocaleString() || 'N/A'}</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-gray-400 text-sm mb-2">Max Supply</h3>
          <p className="text-2xl font-bold text-white">{coin.max_supply?.toLocaleString() || '∞'}</p>
        </div>
      </div>

      {/* Price Chart Placeholder */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Price Chart</h2>
        <div className="h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg flex items-center justify-center border border-white/10" ref={chartShow}>
          <div className="text-center">
            {/* <div className="text-6xl mb-4">📈</div>
            <p className="text-gray-500 text-sm mt-2">Connect to a real crypto API for live data</p> */}
          </div>
        </div>
      </div>

      
      {/* About Section */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">About {coin.name}</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">
            {coin.name} ({coin.symbol.toUpperCase()}) is a leading cryptocurrency with a current market cap of ${coin.market_cap.toLocaleString()}. 
            With a 24-hour trading volume of ${coin.total_volume.toLocaleString()}, it represents {coin.market_cap_rank ? `#${coin.market_cap_rank}` : 'a top position'} in the global cryptocurrency market.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            The current price of {coin.name} is ${coin.current_price.toLocaleString()}, showing a{' '}
            <span className={coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}>
              {coin.price_change_percentage_24h >= 0 ? 'gain' : 'loss'} of {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>{' '}
            in the last 24 hours.
          </p>
        </div>
        
        <div className="mt-6 flex space-x-4">
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Official Website</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Whitepaper</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;