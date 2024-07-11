import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Store from '../Pages/Store/Store';
import UniversityDetails from '../Pages/UniversityDetails/UniversityDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/store',
        element: <Store />,
      },
      {
        path: '/universitydetails',
        element: <UniversityDetails />,
      },
    ],
  },
]);
export default router;
