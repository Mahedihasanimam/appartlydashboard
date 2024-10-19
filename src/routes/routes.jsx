import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';

import Competition from '../pages/Competition';
import Moderation from '../pages/Moderation';
import PaymentManagement from '../pages/PaymentManagement';
import UserManagement from '../pages/UserManagement';
import Dashboardmain from './../pages/Dashboardmain';
import Notification from './../components/Notification';
import PropertyListings from '../components/PropertyListings';
import CategoryManagement from '../components/CategoryManagement';
import ManageUsers from '../components/ManageUsers';


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
        path: "/user-management",
        element: <UserManagement></UserManagement>,
      },
    ]
  },

]);

export default router;