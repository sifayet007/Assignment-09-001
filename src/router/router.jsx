import { createBrowserRouter, Link } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "*",
    element: (
      <h1 className="text-5xl flex flex-col  ">
        Error 404: Page Not Found <br />
        <Link className="btn w-fit" to="/">
          Back
        </Link>
      </h1>
    ),
  },
]);
export default router;
