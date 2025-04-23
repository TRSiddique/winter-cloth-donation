import { createBrowserRouter } from 'react-router-dom';
import DonationCampaigns from './../components/Campaign/DonationCampaigns';
import Login from '../components/Login/Login';
import HowToHelp from './../components/How-to-help/HowToHelp';
import Layout from './../Layout';
import Home from './../components/Home/Home'; 
import ErrorPage from './../components/Error';
import './../App.css';
import Registration from './../components/Registration/Registration';
import DetailsCampaign from '../components/Campaign/DetailsCampaign';
import PrivetRoute from './PrivetRoute';
import Dashboard from '../Dashboard/Dashboard';
import GoogleSignIn from '../components/GoogleSignIn/GoogleSignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'campaigns',
        element: <DonationCampaigns />,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'help',
        element: <HowToHelp />,
      },
      {
        path: '/campaign/:id',
        element: <PrivetRoute>
          <DetailsCampaign></DetailsCampaign>
        </PrivetRoute>
      },
      {
        path:'/dashboard',
        element: <PrivetRoute>
          <Dashboard></Dashboard>
        </PrivetRoute>
      },
      {
        path: '/google-login',
        element: <GoogleSignIn></GoogleSignIn>

      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
