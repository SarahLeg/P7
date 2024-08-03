import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Rental from './pages/rental';
import './styles/mediaqueries.scss';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Error/>} />
          <Route path="/rental/:id" element={<Rental/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;