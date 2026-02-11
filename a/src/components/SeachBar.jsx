import React, { useState } from "react";
import { Search } from "lucide-react";
import { searchproduct } from "../utils/api"; // ✅ import your API
import ProductCard from "./ProductCard";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    try {
      const data = await searchproduct(query); // ✅ call API
      console.log("Search result:", data);
      setResults(data); // store results in state
    } catch (error) {
      console.log("Search failed");
    }
  };

  return (
    <div className="w-[40%] relative">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full bg-slate-300 rounded-full px-6 py-4 items-center text-black">
          <Search size={18} className="text-gray-500 mr-2" />

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="outline-none w-full text-sm px-4 bg-transparent"
          />

          <button type="submit" className="hidden">
            Search
          </button>
        </div>
      </form>

      {/* 🔽 Show Results Dropdown */}
      {/* {results.length > 0 && (
        <div className="absolute bg-white w-full mt-2 shadow-lg rounded-lg max-h-60 overflow-y-auto z-50">
          {results.map((item,idx) => (
            <div
              key={item._id}
              className="p-3 hover:bg-gray-100 cursor-pointer border-b"
            >

                <ProductCard item={item} idx={idx}/>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
