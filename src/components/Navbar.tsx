import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TrendingUp, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Market', path: '/market' },
    { name: 'About', path: '/about' },
  ];

  const handleSignOut = () => {
    navigate('/signin');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-white">CryptoHub</span>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden sm:flex space-x-1 bg-white/5 rounded-lg p-1">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`px-4 lg:px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === tab.path
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <User className="h-4 w-4" />
              <span className="hidden md:block">Account</span>
            </button>
          </div>

          {/* Mobile User Button */}
          <div className="sm:hidden">
            <button
              onClick={handleSignOut}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-2 rounded-lg transition-all duration-200"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden border-t border-white/10">
          <div className="flex justify-around py-2">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`flex-1 text-center py-3 px-2 text-sm font-medium transition-all duration-200 ${
                  location.pathname === tab.path
                    ? 'text-white bg-white/10 rounded-lg mx-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;