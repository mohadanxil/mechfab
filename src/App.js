import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Services from './pages/services';
import Products from './pages/products';
import ContactPage from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';
import ProductSection from './pages/productSection';

function App() {
   return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product-description/:id" element={<ProductSection/>}/>
          <Route path="/contact" element={<ContactPage/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
