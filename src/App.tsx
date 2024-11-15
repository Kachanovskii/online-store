import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
