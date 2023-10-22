import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Appointment from './pages/Appointment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
                    <Route index element={<App />} />
                    <Route path="login" element={<Login />} />
                    <Route path="appointments" element={<Appointment />} />
                    <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);