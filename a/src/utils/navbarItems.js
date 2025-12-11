import { FaHome, FaShoppingBag, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import Home from "../pages//Home";
import AllProducts from "../pages/AllProducts";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Orders from "../pages/Orders"; 

export const navItem = [
  {
    title: "Home",
    path: "/",
    element: Home,
    icon: FaHome
  },
  {
    title: "Products",
    path: "/products",
    element: AllProducts,
    icon: FaShoppingBag
  },
  
  {
    title: "Wishlist",
    path: "/wishlist",
    element: Wishlist,
    icon: FaHeart
  },
  {
    title: "Orders",
    path: "/orders",
    element: Orders,      
    icon: FaUser          
  }
];
