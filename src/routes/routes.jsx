import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Dashboardmain from './../pages/Dashboardmain';
import Notification from './../components/Notification';
import PropertyListings from '../components/PropertyListings';
import CategoryManagement from '../components/CategoryManagement';
import ManageUsers from '../components/ManageUsers';
import UserProfile from '../components/UserProfile';
import Transactions from '../components/Transactions';
import Seetings from '../components/Seetings';
import ManageBooking from '../components/ManageBooking';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboardmain></Dashboardmain>,
      },
      {
        path: "/notification",
        element: <Notification/>,
      },
      {
        path: "/PropertyListing",
        element: <PropertyListings></PropertyListings>,
      },
      {
        path: "/CategoryManagement",
        element: <CategoryManagement></CategoryManagement>,
      },
      {
        path: "/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/transactions",
        element: <Transactions/>
      },
      {
        path: "/user/:userId",
        element:<UserProfile/>
      },
      {
        path: "/seetings",
        element:<Seetings/>
      },
      {
        path: "/bookingmanagement",
        element:<ManageBooking/>
      }
    ]
  },

]);

export default router;