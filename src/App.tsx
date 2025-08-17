import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Market from './pages/Market';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CoinDetails from './pages/CoinDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* WRAP THE LAYOUT FILE AS THE PARENT ROUTER */}
          <Route path="/" element={<Layout />}>
          {/* CHILDREN ROUTERS */}
            <Route index element={<Home />} />
            <Route path="market" element={<Market />} />
            <Route path="about" element={<About />} />
            <Route path="coin/:id" element={<CoinDetails />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;