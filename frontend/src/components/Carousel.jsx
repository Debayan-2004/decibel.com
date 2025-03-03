import { useState, useEffect } from "react";


import image1 from "../assets/carousel.images/1.jpg";
import image2 from "../assets/carousel.images/2.jpg";
import image3 from "../assets/carousel.images/3.jpg";


const images = [image1,image2, image3];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!images.length) {
    return <p className="text-center text-gray-500">No images available.</p>;
  }

  return (
    <div className="relative mx-auto w-10/12 h-auto">
      {/* Slide Image Container */}
      <div className="aspect-[16/6.8] relative w-10/12 mx-auto h-auto rounded-lg overflow-hidden  shadow-gray-500 shadow-2xl  align-bottom">
        {/* Image */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto object-cover rounded-lg "
        />

        {/* Gradient Overlay */}
        
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 text-gray-500  hover:text-blue-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full  "
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2  text-gray-500 hover:text-blue-400  px-1.5 sm:px-2 py-0.5  sm:py-1 rounded-full  "
      >
        ❯
      </button>
    </div>
  );
}
