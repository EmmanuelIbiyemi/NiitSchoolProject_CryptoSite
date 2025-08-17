import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Real-time Tracking',
      description: 'Monitor cryptocurrency prices and market movements in real-time'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Trading',
      description: 'Industry-leading security measures to protect your investments'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Execute trades instantly with our optimized trading engine'
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Advanced Analytics',
      description: 'Professional-grade charts and analysis tools for informed decisions'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Trade Crypto with
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Confidence</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join millions of traders worldwide on the most trusted cryptocurrency exchange platform. 
          Start your journey into the future of finance today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/market"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Explore Markets
          </Link>
          <Link
            to="/signup"
            className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">$2.1T+</div>
          <div className="text-gray-400">Total Market Cap</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">50M+</div>
          <div className="text-gray-400">Active Users</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">500+</div>
          <div className="text-gray-400">Cryptocurrencies</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose CryptoHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-200 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 md:p-12 text-center border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the crypto revolution today. Create your account and start trading with as little as $10.
        </p>
        <Link
          to="/signup"
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
        >
          Create Free Account
        </Link>
      </div>
    </div>
  );
};

export default Home;