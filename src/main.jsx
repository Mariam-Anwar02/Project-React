import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Ensure BrowserRouter is imported
import './index.css';
import App from './App.jsx';
import 'font-awesome/css/font-awesome.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Ensure this is wrapping App */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
