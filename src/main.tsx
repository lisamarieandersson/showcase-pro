import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CvPage from './pages/CvPage';
import HomePage from './pages/home-page/HomePage';
import ProjectPage from './pages/ProjectPage';
import './styles/index.scss';

/* ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="cv" element={<CvPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="projects" element={<ProjectPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
