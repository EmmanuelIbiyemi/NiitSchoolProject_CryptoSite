import React from 'react';
import { Shield, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security First',
      description: 'We employ bank-level security measures including cold storage, two-factor authentication, and regular security audits to protect your assets.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Driven',
      description: 'Our platform is built by traders, for traders. We continuously improve based on feedback from our global community.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Accessibility',
      description: 'Available in over 100 countries with support for multiple languages and local payment methods.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Industry Leader',
      description: 'Recognized as one of the top cryptocurrency exchanges with numerous awards for innovation and user experience.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Security',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-6">About CryptoHub</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Founded in 2018, CryptoHub has grown to become one of the world's leading cryptocurrency 
          exchanges, serving over 50 million users across the globe with a mission to make 
          cryptocurrency accessible to everyone.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-8 md:p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            To democratize access to cryptocurrency and blockchain technology by providing a secure, 
            user-friendly platform that empowers individuals and institutions to participate in the 
            digital economy. We believe in a future where financial services are open, transparent, 
            and accessible to all.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <div className="text-blue-400 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-white mb-2">2018</div>
          <div className="text-gray-400">Founded</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-white mb-2">50M+</div>
          <div className="text-gray-400">Users Worldwide</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-white mb-2">100+</div>
          <div className="text-gray-400">Countries</div>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
          <div className="text-3xl font-bold text-white mb-2">$1T+</div>
          <div className="text-gray-400">Trading Volume</div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
            <p className="text-gray-400">support@cryptohub.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Business</h3>
            <p className="text-gray-400">business@cryptohub.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Press</h3>
            <p className="text-gray-400">press@cryptohub.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;