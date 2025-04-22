import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import ErrorPage from './components/Error';
import Home from './components/Home/Home';
import DonationCampaigns from './components/Campaign/DonationCampaigns';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '', // Default route, renders Home component
        element: <Home />
      },
      {
        path: '/campaigns',
        element: <DonationCampaigns />
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
