import React from "react";
import image1 from "../assets/carousel.images/medzy.jpg"; // Import the image correctly
import image2 from "../assets/carousel.images/pathzy.jpg"; // Import other images as needed
import image3 from "../assets/carousel.images/medilink.jpg";
import image4 from "../assets/carousel.images/doczy.jpg";
import image5 from "../assets/carousel.images/decimeter.jpg";
import image6 from "../assets/carousel.images/trinity.jpg";
import image7 from "../assets/carousel.images/decicart.jpg";

const cardDetails = [
  {
    title: "medZy",
    description: "Your Online Pharmacy ",
    imageUrl: image1, // Use the imported image directly
  },
  {
    title: "pathZy",
    description: "Online Lab Test Booking",
    imageUrl: image2, // Use the imported image directly
  },
  {
    title: "Medi.Link",
    description: "Onestop Comprehensive Heathcare Provider",
    imageUrl: image3, // Use the imported image directly
  },
  {
    title: "docZy",
    description: "Doctor Appointment Booking Portal",
    imageUrl: image4, // Use the imported image directly
  },
  {
    title: "deci.meter",
    description: "Electricity Billing Software",
    imageUrl: image5, // Use the imported image directly
  },
  {
    title: "Trinity",
    description: "E-learning Platform",
    imageUrl: image6, // Use the imported image directly
  },
  {
    title: "deci.CartX",
    description: "Online Grocery Store",
    imageUrl: image7, // Use the imported image directly
  },
];

const Card = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="p-6 flex flex-col items-start mx-auto w-11/12 sm:w-9/12">
        <h1 className="text-2xl font-semibold mb-4 sm:text-4xl">
          Our Products{" "}
          <span className="text-blue-600 text-3xl font-bold sm:text-5xl"></span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="w-9/12 px-4 mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 justify-center  ">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border-gray-300 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.imageUrl} // Use the imported image directly
              alt={card.title}
              className="w-full h-40 object-cover rounded-t-xl shadow-xl"
            />
            <h3 className="text-lg font-bold mt-4 text-center">{card.title}</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              {card.description}
            </p>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Card;
