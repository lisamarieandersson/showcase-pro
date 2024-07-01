import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoutesFromElements, Route } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AboutPage from './pages/about-page/AboutPage';
import ContactPage from './pages/contact-page/ContactPage';
import CvPage from './pages/cv-page/CvPage';
import CvSwedishPage from './pages/cv-page/CvSwedishPage';
import CvEnglishPage from './pages/cv-page/CvEnglishPage';
import HomePage from './pages/home-page/HomePage';
import ProjectPage from './pages/project-page/ProjectPage';
import './styles/index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="cv" element={<CvPage />} />
      <Route path="cv/swedish" element={<CvSwedishPage />} />
      <Route path="cv/english" element={<CvEnglishPage />} />
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
