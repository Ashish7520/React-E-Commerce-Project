import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoutes from "./components/Routes/routes";
import StorePage from "./components/StorePage/StorePage";
import AboutUs from "./components/AboutPage/AboutUs";
import HomePage from "./components/Home/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes />,
    children: [
      { path: "/home", element: <HomePage /> },
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
