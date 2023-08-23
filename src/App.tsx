import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/login";
import SettingsGeneral from "./pages/settings/SettingsGeneral";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/auth/register",
      element: <Register />,
    },
    {
      path: "/auth/login",
      element: <Login />,
    },
    {
      path: "/settings",
      element: <SettingsGeneral />,
    },
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
