import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import CheckoutPage from "./pages/CheckoutPage.tsx";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import React, { useState } from "react";

const App: React.FC = () => {
  const handleAddToCart = (productId: number) => {
    console.log(`Товар з ID ${productId} додано до кошика`);
  };

  const [cartItems, setCartItems] = useState<
    Array<{ id: number; name: string; price: number; quantity: number }>
  >([
    { id: 1, name: "Товар 1", price: 100, quantity: 2 },
    { id: 2, name: "Товар 2", price: 200, quantity: 1 },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
