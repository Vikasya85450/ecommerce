import React, { useEffect, useState } from "react";
import b1 from "../assets/banner/b2.jpg";
import b2 from "../assets/banner/b1.jpg";
import b3 from "../assets/banner/b3.avif"; 
import b4 from "../assets/banner/b4.avif";

const Banner = () => {
  const banners = [b1, b2, b3,b4];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === banners.length - 1 ? 0 : current + 1);
  }; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="relative w-full h-[230px] md:h-[380px] overflow-hidden rounded-2xl shadow-lg">

        
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((img, idx) => (
            <div key={idx} className="min-w-full h-full">
              <img
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 
                     bg-black/40 hover:bg-black/60 text-white 
                     w-10 h-10 rounded-full flex items-center justify-center 
                     text-2xl transition"
        >
          ‹
        </button>

        
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 
                     bg-black/40 hover:bg-black/60 text-white 
                     w-10 h-10 rounded-full flex items-center justify-center 
                     text-2xl transition"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                current === idx ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Banner;
