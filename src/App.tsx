import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import ProductPage from "./pages/ProductPage.tsx"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import Header from "./components/Header"
import GlobalStyles from "./GlobalStyles"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
