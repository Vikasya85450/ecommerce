import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getCategory } from "../utils/api";
import CategoryCircle from "./CategoryCircle";

const CategoryScroll = ({selected,setSelectedCategory}) => {
    const [allCategory, setAllCategory] = useState([]);

    const allCategoryItem = {
        _id: "all",
        name: "All",
        image: "https://tse3.mm.bing.net/th/id/OIP.RFsatK1E2ROtvvZxbWanuAHaFE?rs=1&pid=ImgDetMain&o=7&rm=3" // or any icon/image
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCategory();
                if (response.status === "success") {
                    setAllCategory(response.result);
                }
            } catch (error) {
                toast.error("Something went wrong");
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full overflow-x-auto px-4 no-scrollbar bg-gray-100">
            <div className="flex gap-20 w-max py-4 cursor-pointer ">
                <CategoryCircle data={allCategoryItem} selected={selected} setSelectedCategory={setSelectedCategory} />
                {allCategory.map((c, i) => (
                    <CategoryCircle selected={selected} setSelectedCategory={setSelectedCategory} key={i} data={c} />
                ))}
            </div>
        </div>
    );
};

export default CategoryScroll;
