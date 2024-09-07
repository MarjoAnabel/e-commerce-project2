import { ProductsContext } from './context/ProductsContext/ProductsState';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

import Products from './components/Products/Products';
import { ProductsProvider } from './context/ProductsContext/ProductsState';

import React, { useEffect, useContext } from 'react';
import TheHeader from './components/TheHeader/TheHeader';

function App() {
  const { getProducts } = useContext(ProductsContext);

    useEffect(() => {
        getProducts;
    }, [getProducts]);
  return (
    
      <ProductsProvider>
        <Router>
       
          <Routes>
            <Route path="/" element={<TheHeader/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
        </Router>
      </ProductsProvider>
    
  )
}

export default App
