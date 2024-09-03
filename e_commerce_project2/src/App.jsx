import './App.css'
import TheHeader from './components/TheHeader/TheHEader'
import { ProductsProvider } from './context/ProductsContext/ProductsState'

function App() {

  return (
    <>
    <ProductsProvider>
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
    </ProductsProvider>
    </>
  )
}

export default App
