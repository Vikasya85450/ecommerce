import {
  FaShoppingBag,
  FaHeart,
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaGift,
  FaShoppingCart
} from "react-icons/fa";

import AllProducts from "../pages/AllProducts";
import Wishlist from "../pages/Wishlist";
import Orders from "../pages/Orders";
import Contact from "../pages/Contact";
import Address from "../pages/Address";

export const navItem = [
  {
    title: "Address",
    path: "/api/address",
    element: Address,
    icon: FaMapMarkerAlt,
  },
  {
    title: "Products",
    path: "/products",
    element: AllProducts,
    icon: FaShoppingBag,
  },
  {
    title: "Wishlist",
    path: "/wishlist",
    element: Wishlist,
    icon: FaHeart,
  },
  {
    title: "Orders",
    path: "/orders",
    element: Orders,
    icon: FaShoppingCart,
  },
  {
    title: "Contact Us",
    path: "/contact",
    element: Contact,
    icon: FaPhone,
  },
  {
    title: "Gift Card",
    path: "/gift-card",
    element: Orders,
    icon: FaGift,
  },
];
