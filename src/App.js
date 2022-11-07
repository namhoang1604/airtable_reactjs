import './App.css';
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import MainFrame from './components/MainFrame';
import Models from './pages/models/Models';
import Drawings from './pages/drawings/Drawings';
import Services from './pages/services/Services';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainFrame />}>
      <Route path="/models" element={<Models />} />
      <Route path="/drawings" element={<Drawings />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<Navigate to="/models" />} />
    </Route>,
  ),
);

function Fallback() {
  return <p>Performing initial data load</p>;
}

function App() {
  return <RouterProvider router={router} fallbackElement={Fallback} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default App;
