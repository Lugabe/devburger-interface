import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login } from './containers/Login/index';
import GlobalStyles from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
    <ToastContainer
      autoClose={2100}
      theme='colored'
    />
  </React.StrictMode>,
);
