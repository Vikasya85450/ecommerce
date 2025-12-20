import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";

import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Category from '../pages/category/Category'
import AddCategory from "../pages/category/Add-Category";
import Dashboard from "../pages/Dashboard";
// import AddProduct from "../pages/admin/AddProduct";
// import Products from "../pages/admin/Products";
// import AddBanner from "../pages/admin/AddBanner";
// import Orders from "../pages/admin/Orders";
// import Users from "../pages/admin/Users";




export const paths = [
    {
        path: "",
        element: Dashboard,
        icon: MdDashboard,
        label: "Dashboard",
    },

    {
        path: "categories",
        element: Category,
        icon: BiCategoryAlt,
        label: "Categories",
    },
    {
        path: "add-category",
        element: AddCategory,
        icon: AiOutlineAppstoreAdd,
        label: "Add Category",
    },
    //   {
    //     path: "products",
    //     element: Products,
    //     icon: MdProductionQuantityLimits,
    //     label: "All Products",
    //   },
    //   {
    //     path: "add-product",
    //     element: AddProduct,
    //     icon: BsBoxSeam,
    //     label: "Add Product",
    //   },

    //   {
    //     path: "add-banner",
    //     element: AddBanner,
    //     icon: RiImageAddLine,
    //     label: "Add Banner",
    //   },
    //   {
    //     path: "orders",
    //     element: Orders,
    //     icon: BsBoxSeam,
    //     label: "Orders",
    //   },
    //   {
    //     path: "users",
    //     element: Users,
    //     icon: FaUsers,
    //     label: "Users",
    //   },


];
