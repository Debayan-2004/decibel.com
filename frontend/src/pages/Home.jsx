import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import TestimonialCarousel from "../components/Testimonials";
import Principle from "../components/Principle";
function Home() {
  return (<>

  <div className=" flex flex-col justify-items-start  overflow-hidden w-screen ">
    <div className=" min-h-screen overflow-hidden w-screen ">
      {/* Carousel Section */}
     <Carousel className="mb-15 "/>
 
      {/* Heading Section */}
      <div className="p-6 flex flex-col items-start mx-auto w-11/12  sm:w-9/12 mt-10 ">
        <h1 className="text-2xl font-semibold  mb-3 sm:text-4xl">Welcome to <span className="text-blue-600 text-3xl font-bold sm:text-5xl">decibel.</span></h1>
        <p className="text-gray-700 sm:text-xl ">Delivering high-quality services to meet your needs. </p>
      </div>

      {/* Hero Section */}

     <Card className="mt-2 mb-10"/>
      <div className="mt-20"></div>

    </div>

    <Principle/>
    <TestimonialCarousel/> 
    </div>
    </>
  );
}

export default Home;
