import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cryptoData } from '../data/cryptoData';

const Market: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const coin = cryptoData.find(
        c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (coin) {
        navigate(`/coin/${coin.id}`);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Cryptocurrency Market</h1>
        <p className="text-gray-300">Real-time prices and market data for the top cryptocurrencies</p>
      </div>

      {/* Search Section */}
      <div className="mb-8">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a cryptocurrency..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Market Table */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-gray-300 font-medium">#</th>
                <th className="text-left py-4 px-6 text-gray-300 font-medium">Name</th>
                <th className="text-left py-4 px-6 text-gray-300 font-medium">Price</th>
                <th className="text-left py-4 px-6 text-gray-300 font-medium">24h Change</th>
                <th className="text-left py-4 px-6 text-gray-300 font-medium">Market Cap</th>
                <th className="text-left py-4 px-6 text-gray-300 font-medium">Volume (24h)</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((coin, index) => (
                <tr
                  key={coin.id}
                  onClick={() => navigate(`/coin/${coin.id}`)}
                  className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors duration-200"
                >
                  <td className="py-6 px-6 text-white">{index + 1}</td>
                  <td className="py-6 px-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="text-white font-medium">{coin.name}</div>
                        <div className="text-gray-400 text-sm">{coin.symbol.toUpperCase()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-white font-medium">
                    ${coin.current_price.toLocaleString()}
                  </td>
                  <td className="py-6 px-6">
                    <div className={`flex items-center space-x-1 ${
                      coin.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {coin.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{Math.abs(coin.price_change_percentage_24h).toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 text-white">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                  <td className="py-6 px-6 text-white">
                    ${coin.total_volume.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Market;