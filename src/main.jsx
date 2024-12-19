import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './Store/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPage from './Components/Pages/RegisterPage.jsx';
import LoginPage from './Components/Pages/LoginPage.jsx'
import Admin from './Components/Pages/Admin.jsx'
import Home from './Components/Pages/Home.jsx';
import ProfilePage from './Components/Pages/ProfilePage.jsx'
import AuthLayout from './Components/AuthLayout.jsx'
import MoreInfo from './Components/Pages/MoreInfo.jsx';
import Contact from './Components/Pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/moreinfo",
        element: <MoreInfo />
      },
      {
        path: "/profile",
        element: <AuthLayout authentication><ProfilePage /></AuthLayout>,
      },
      {
        path: "/contact",
        element : <Contact/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
