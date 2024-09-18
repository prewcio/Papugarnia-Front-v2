import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import './pages/elements.css';
import logo from './assets/papugarnia-logo.webp';
import { AuthProvider } from './pages/elements/worker/context/AuthContext';
import Loader from './pages/elements/Loader';
import { WavyContainer } from 'react-wavy-transitions';
import Snowfall from 'react-snowfall';

const UrodzinySP = lazy(() => import('./pages/elements/subpages/UrodzinySP'));
const GrupySP = lazy(() => import('./pages/elements/subpages/GrupySP'));
const IndywidualnaSP = lazy(() => import('./pages/elements/subpages/IndywidualnaSP'));
const Papugi = lazy(() => import('./pages/elements/papugi/Papugi'));
const ParrotPage = lazy(() => import('./pages/elements/papugi/ParrotPage'));
const Kontakt = lazy(() => import('./pages/elements/subpages/Kontakt'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.head.innerHTML += `<link rel="preload" as='image' href=${logo} />`;

const dzis = new Date();
const snieg = ((dzis.getDate() > 10 && dzis.getMonth() === 11) || (dzis.getDate() < 25 && dzis.getMonth() === 0));

const Footer = lazy(() => import("./pages/onTopElements/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Welcome = lazy(() => import('./pages/Welcome'));
const Header = lazy(() => import("./pages/onTopElements/Header"));
const Regulamin = lazy(() => import('./pages/Regulamin'));
const WorkDashboard = lazy(() => import('./pages/elements/worker/Dashboard'));
const Login = lazy(() => import('./pages/elements/worker/Login'));

root.render(
  <Router>
    <AuthProvider>
    <WavyContainer />
    <Loader />
        <Header />
        {snieg &&
          <Snowfall
            color="#d4d4d4"
            style={{
              position: 'fixed',
              height: '100vh',
              width: '100vw',
              zIndex: '5',
            }}
            snowflakeCount={80}
          />
        }
        <Routes>
          <Route path='/' element={<Welcome />} />
          {/* Papugarnie */}
          <Route path='/papugarnia/warszawa' element={<Navigate to="/" />} /> {/* Jerozolimskie 200 */}
          <Route path='/kontakt' element={<Kontakt />} />
          {/* Regulamin */}
          <Route path='/regulamin' element={<Regulamin />} />
          <Route path='/urodziny' element={<UrodzinySP />} />
          <Route path='/grupy' element={<GrupySP />} />
          <Route path='/indywidualna' element={<IndywidualnaSP />} />
          {/* Papugi */}
          <Route path='/papugi' element={<Papugi />} />
          <Route path='/papugi/:codename' element={<ParrotPage />} />
          {/* Worker Menu */}
          <Route path='/worker/login' element={<Login />} />
          <Route path='/worker' element={<Navigate to="/worker/login" />} />
          <Route path='/worker/dashboard' element={<WorkDashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </AuthProvider>
  </Router>
);