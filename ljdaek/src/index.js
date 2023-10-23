import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import NoPage from './pages/NoPage';
import Appointment from './pages/Appointment';
import Customer from './pages/Customer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/customer/:id" element={<Customer />} />
                    <Route path="login" element={<Login />} />
                    <Route path="appointments" element={<Appointment />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    </React.StrictMode>
);