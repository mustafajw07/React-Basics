import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import HomePage from './components/HomePage';
import { ThemeContext } from './context/ThemeContext';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CartPage from './components/CartPage';
import { CartContext } from './context/CartContext';
import ProductPage from './components/ProductPage';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
          <CartContext.Provider value={{ cartItems, setCartItems }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </CartContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
