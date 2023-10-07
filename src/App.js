import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoutes from "./components/Routes/routes";
import StorePage from "./components/StorePage/StorePage";
import AboutUs from "./components/AboutPage/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes />,
    children: [
      { path: "/home" },
      { path: "/store", element: <StorePage /> },
      { path: "/about", element: <AboutUs /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
