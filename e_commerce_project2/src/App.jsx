import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import TheHeader from './components/TheHeader/TheHeader'
import Products from './components/Products/Products';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import products from './context/ProductsContext/ProductsReducer';

// import { ProductsProvider } from './context/ProductsContext/ProductsState'

function App() {

  return (
    <>
    <ProductsProvider>
    <Router>
          {/* <TheHeader /> */}
          <Routes>
            <Route path="/" element={<TheHeader />} />
            <Route path="/products" element={<Products products={products}/>} />
          </Routes>
        </Router>
    </ProductsProvider>
        
        
    </>
  )
  /* return (
    <>
    <ProductsProvider>
      <Router>
        <TheHeader />
        <Products/>
        <Routes>
          <Route path="/" element={<TheHeader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ProductsProvider>
    </>
  ) */
}

export default App
