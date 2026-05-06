import { Analytics } from "@vercel/analytics/react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PrivacyNotice from "./pages/PrivacyNotice";
import { Navbar } from "./components/Navbar";

function App() {

  const routes = [{
    path: '/',
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element:
          <Home />
      },
      {
        path: '/privacy-notice',
        element:
          <PrivacyNotice />
      },
    ]
  }]

  const router = createBrowserRouter(routes);

  return (
    <>
      <Navbar />
      <main className='overflow-hidden text-gray-950 h-full' id='main-content'>
        <RouterProvider router={router} />
      </main>
      <Analytics />
    </>
  )
}

export default App;