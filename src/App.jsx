import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserProvider } from '../context/UserContext/UserState'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'
import Admin from '../components/Admin/Admin'
import { ProductsContext } from './context/ProductsContext/ProductsState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import Products from './components/Products/Products';
import TheHeader from './components/TheHeader/TheHeader';

function App() {
  const { getProducts } = useContext(ProductsContext);

    useEffect(() => {
        getProducts;
    }, [getProducts]);
  return (
    <UserProvider>
      <ProductsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TheHeader/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </UserProvider>
  )
}

export default App
