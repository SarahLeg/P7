import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from '../pages/home';
import About from '../pages/about';
import Banner from '../components/banner';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/banner" element={<Banner/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;