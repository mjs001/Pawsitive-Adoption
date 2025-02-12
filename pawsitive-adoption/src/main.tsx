import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import App from './App.tsx';
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites';
import Signin from './pages/Signin';
import Match from './pages/Match';
import Signup from './pages/Signup';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { theme } from './CustomizedTheme';
import { ThemeProvider } from '@mui/material/styles';
import Signout from './pages/Signout';
const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        // errorElement: <NotFoundPage />,
      },
      {
        path: '/match',
        element: <Match />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
        errorElement: <NotFoundPage />,
      },
      {
        path: '/signout',
        element: <Signout />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
