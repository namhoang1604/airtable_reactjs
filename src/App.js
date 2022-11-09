import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import MainFrame from './components/MainFrame';
import Models from './pages/models/Models';
import Drawings from './pages/drawings/Drawings';
import Services from './pages/services/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainFrame />}>
          <Route index element={<Models />} />
          <Route path="drawings" element={<Drawings />} />
          <Route path="services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
