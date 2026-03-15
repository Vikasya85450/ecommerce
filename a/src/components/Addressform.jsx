import React, { useState } from 'react'
import { addAdress } from '../utils/api';
import { toast } from 'react-toastify';

const Addressform = () => {
    const [data, setdata] = useState({
        name:"",
        phone:0,
        pincode:0,
        house:"",
        city:"",
        street:"",
        landmark:"",
        type:"",
    });
    
const handlesubmit=(async(e)=>{
    e.preventDefault();
    // console.log("data submit" );
    // console.log(data);

    try {
        
            const response = await addAdress(data);
            
            if(response.status == "success"){
                toast.success("Address added successfully")
            }
            
            
         } catch (error) {
            console.log(error);
            toast.error("address not save")
            
          
         }
}

)

  return (
   <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start py-10">
  <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
    <h2 className="text-2xl font-semibold mb-6 text-gray-700">
      Add New Address
    </h2>

    <form onSubmit={handlesubmit} className="space-y-5">

      <div>
        <label className="block text-sm text-gray-600 mb-1">Full Name</label>
        <input
          value={data.name}
          onChange={(e)=>setdata({...data,name:e.target.value})}
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
        <input
          value={data.phone}
          onChange={(e)=>setdata({...data,phone:e.target.value})}
          type="text"
          placeholder="10 digit mobile number"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Pincode</label>
        <input
          value={data.pincode}
          onChange={(e)=>setdata({...data,pincode:e.target.value})}
          type="text"
          placeholder="226001"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          House No / Building
        </label>
        <input
          value={data.house}
          onChange={(e)=>setdata({...data,house:e.target.value})}
          type="text"
          placeholder="House no / Building name"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">City</label>
        <input
          value={data.city}
          onChange={(e)=>setdata({...data,city:e.target.value})}
          type="text"
          placeholder="Lucknow"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Street / Area</label>
        <input
          value={data.street}
          onChange={(e)=>setdata({...data,street:e.target.value})}
          type="text"
          placeholder="Street area"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Landmark</label>
        <input
          value={data.landmark}
          onChange={(e)=>setdata({...data,landmark:e.target.value})}
          type="text"
          placeholder="Nearby landmark"
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Address Type</p>

        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="home"
              checked={data.type === "home"}
              onChange={(e)=>setdata({...data,type:e.target.value})}
            />
            Home
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              value="office"
              checked={data.type === "office"}
              onChange={(e)=>setdata({...data,type:e.target.value})}
            />
            Office
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
      >
        Save Address
      </button>

    </form>
  </div>
</div>
  )
}

export default Addressform