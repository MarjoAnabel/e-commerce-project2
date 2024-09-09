import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'
import TheHeader from '../components/TheHeader/TheHeader'
import Admin from '../components/Admin/Admin'
import Products from '../components/Product/Products'
import {UserProvider} from '../context/UserContext/UserState'
import { ProductsProvider } from '../context/ProductsContext/ProductsState'

function App() {
 return (
  <UserProvider>
  <ProductsProvider>
  <Router>
    <TheHeader />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
  </ProductsProvider>
</UserProvider>
  )
}
export default App