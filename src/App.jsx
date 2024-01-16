import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
