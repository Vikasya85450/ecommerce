import React, { useEffect, useState } from "react";
import { getAddress } from "../utils/api";

const Address = () => {

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const callapi = async () => {
      try {
        const res = await getAddress();
        setData(res.address);
      } catch (error) {
        console.log(error);
      }
    };

    callapi();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-semibold mb-6">Select Delivery Address</h1>

      <div className="space-y-4">

        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-5 rounded-lg shadow-md border hover:border-blue-400 transition"
          >

            <div className="flex items-start gap-3">

              <input
                type="radio"
                name="address"
                checked={selected === item._id}
                onChange={() => setSelected(item._id)}
                className="mt-1"
              />

              <div className="w-full">

                <div className="flex items-center gap-3">

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {item.type.toUpperCase()}
                  </span>

                </div>

                <p className="text-gray-700 mt-1">
                  {item.house}, {item.street}
                </p>

                {item.landmark && (
                  <p className="text-gray-600 text-sm">
                    Landmark: {item.landmark}
                  </p>
                )}

                <p className="text-gray-700">
                  {item.city} - {item.pincode}
                </p>

                <p className="text-gray-800 font-medium mt-1">
                  Phone: {item.phone}
                </p>

                <div className="flex gap-4 mt-3">

                  <button className="text-blue-600 font-medium hover:underline">
                    Edit
                  </button>

                  <button className="text-red-500 font-medium hover:underline">
                    Delete
                  </button>

                  {selected === item._id && (
                    <button className="bg-yellow-400 px-4 py-1 rounded font-medium">
                      Deliver Here
                    </button>
                  )}

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Address;