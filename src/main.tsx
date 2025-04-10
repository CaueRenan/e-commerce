import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyRoutes } from './Routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyRoutes />
  </StrictMode>,
);
