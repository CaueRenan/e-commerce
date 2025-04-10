import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { ProductListing } from '../pages/ProductListing';
import { ProductPresention } from '../pages/ProductPresention';
import { Checkout } from '../pages/Checkout';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/productPresention" element={<ProductPresention />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};
