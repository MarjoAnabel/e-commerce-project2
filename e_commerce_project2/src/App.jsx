import './App.css'
import TheHeader from './components/TheHeader/TheHEader'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { OrdersProvider } from './context/OrdersContext/OrdersState'


function App() {

  return (
    <>
    <ProductsProvider>
    <OrdersProvider>
      <Router>
        <TheHeader />
        {/* <Products/> */}
        <Routes>
          <Route path="/" element={<TheHeader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </OrdersProvider>
    </ProductsProvider>
    </>
  )
}

export default App
