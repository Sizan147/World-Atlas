import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './app.css'
import { AppLayout } from './layout/AppLayout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { ErrorPage } from './layout/ErrorPage'
import { SoloCountry } from './pages/soloCountry'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/country',
          element: <Country />,
        },
        {
          path: '/country/:name',
          element: <SoloCountry />,
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={routes} ></RouterProvider>
    </>
  )
}

export default App
