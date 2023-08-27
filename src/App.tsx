import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/login";
import SettingsGeneral from "./pages/settings/SettingsGeneral";
import { ROUTE_HOMEPAGE, ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_SETTINGS } from "./shared/constants/router/routes";
import CheckAuth from "./layouts/CheckAuth/CheckAuth";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTE_HOMEPAGE,
      element: 
        <CheckAuth>
          <Homepage />
        </CheckAuth>,
    },
    {
      path: ROUTE_REGISTER,
      element: <Register />,
    },
    {
      path: ROUTE_LOGIN,
      element: <Login />,
    },
    {
      path: ROUTE_SETTINGS,
      element: 
        <CheckAuth>
          <SettingsGeneral />
        </CheckAuth>,
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
