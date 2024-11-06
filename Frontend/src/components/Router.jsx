import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/HomePage";
import ProductList from "../Pages/ProductList";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/CartPage";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import AdminLayout from "./Admin/AdminLayout";
import Signup from "../Pages/Signup";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminUserCarts from "./Admin/AdminUserCart";
import AdminAddProduct from "./Admin/AdminAddProduct";
import AdminProductList from "./Admin/AdminProductList";
import CakesPage from "../Pages/cakePage";
import CategoryProductList from "./Category";
import AccessoryPage from "../Pages/AccessoryPage";
import ContactUs from "../Pages/ContactPage";
import TestCart from "../Pages/TestCart";
import SearchResultsPage from "../Pages/SearchResultPage";
import AdminUserCartDetails from "./Admin/AdminUserCartDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductList /> },
      { path: "/product/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      {path:'testcart', element:<TestCart />},
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/cakes", element: <CakesPage /> },
      { path: "/categoryproduct", element: <CategoryProductList /> },
      { path: "/accessory", element: <AccessoryPage /> },
      {path:'/contact' , element:<ContactUs />},
      {path:'/search-results',element:<SearchResultsPage />}
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "products", element: <AdminProductList /> },
      { path: "add-products", element: <AdminAddProduct /> },
      { path: "user-carts", element: <AdminUserCarts /> },
      {path:"getUserCart/:userId",element:<AdminUserCartDetails/>}
    ],
  },
]);

export default router;
