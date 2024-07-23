import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
// import Card from './card';
import Home from '../pages/home';
import About from '../pages/about';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/" element={<Card/>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;