import { FaHome, FaShoppingBag, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import Home from "../Home";
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
    title: "Cart",
    path: "/cart",
    element: Cart,
    icon: FaShoppingCart
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
