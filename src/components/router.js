import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from '../pages/home';
import About from '../pages/about';
import Banner from '../components/banner';
import Error from '../pages/error';
import Rental from '../pages/rental-page';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/banner" element={<Banner/>} />
          <Route path="/404" element={<Error/>} />
          <Route path="*" element={<Error/>} />
          <Route path="rental" element={<Rental/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;