import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import Login from './routes/Login/index.tsx';
import Cadastro from './routes/Register/index.tsx';
import Assistentes from './routes/Assistentes/index.tsx';
import Conhecimentos from './routes/Conhecimentos/index.tsx';
import MeusCarros from './routes/MeusCarros/index.tsx';
import Sobre from './routes/Sobre/index.tsx';
import Error from './routes/Error/index.tsx';
import ForgotPassword from './routes/ForgotPassword/index.tsx';
import React from 'react';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword/>,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/assistentes",
        element: <Assistentes />,
      },
      {
        path: "/conhecimentos",
        element: <Conhecimentos />,
      },
      {
        path: "/meus-carros",
        element: <MeusCarros />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }   
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
