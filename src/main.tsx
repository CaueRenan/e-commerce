import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { ProductCollaction } from './components/ProductCollaction';
import { ShoppingCart } from './components/ShoppingCart';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productCollaction" element={<ProductCollaction />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
