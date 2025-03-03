import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../images/sm.black.png";
import image2 from "../images/debanuj.png";
import image3 from "../images/ayan.png";
import image4 from "../images/swag.png";
import image5 from "../images/chandan.png";
import image6 from "../images/naba.png";
const testimonials = [
  {
    name: "Dr Debanuj Biswas",
    role: "CEO, ARK Informatics",
    location: "Agartala, Tripura",
    review: "Their tailored solutions have significantly boosted our efficiency.",
    image: image2,
    companyLogo:image1
  },
  {
    name: "Ayan Bhaumik",
    role: "CDPO, Government of Tripura",
    location: "Sabroom, Tripura",
    review: "They organized their work and internal management was outstanding.",
    image: image3,
    companyLogo: image1
  },
  {
    name: "Dr. Swagata Datta",
    role: "MBBS,MD Pharmacology ",
    location: "Mussafarnagar, Uttar Pradesh",
    review: "Working with them was a great experience.",
    image: image4,
    companyLogo: image1,
  },
  {
    name: "Chandan Roy Chowdhury",
    role: "Retired Teacher & Social Activist",
    location: "Sabroom, Tripura",
    review: "A highly skilled and dedicated team that delivers innovative solutions with precision.",
    image: image5,
    companyLogo: image1
  },
  {
    name: "Dr Nabarun Biswas",
    role: "Assistant Proffessor, NIT Agartala",
    location: "Agartala, Tripura",
    review: "Impressed by their structured approach and seamless project management, ensuring smooth execution.",
    image: image6,
    companyLogo: image1
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [cardWidth, setCardWidth] = useState(100);

  useEffect(() => {
    const updateCarousel = () => {
      let newCardsPerView = 0;
      if (window.innerWidth >= 1024) {
        newCardsPerView = 4;
      } else if (window.innerWidth >= 768) {
        newCardsPerView = 3;
      }  else if (window.innerWidth >= 200) {
        newCardsPerView = 2;
      } 
      setCardsPerView(newCardsPerView);
      setCardWidth(100 / (newCardsPerView - 1));
      setIndex(0);
    };
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => {
      window.removeEventListener("resize", updateCarousel);
    };
  }, []);
  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - cardsPerView + 1 : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex >= testimonials.length - cardsPerView + 1 ? 0 : prevIndex + 1
    );
  };
  

  return (
    <div className=" w-11/12 mx-auto relative">
        <div className="mx-2">
      <div className="relative w-full  mx-auto py-10 text-center">
        <h1 className="text-5xl font-bold mb-6 border-b border-gray-600 pb-3"></h1>
        <h2 className="text-3xl font-bold mb-24">
          What Our <span className="text-blue-700 text-4xl">Clients</span> Say
        </h2>
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center overflow-hidden w-full p-1">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-3  px-3 sm:px-2  sm:m-3 "
              style={{ transform: `translateX(-${index * (cardWidth+1)}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-2 shadow-lg rounded-2xl bg-gray-200 mx-auto  "
                  style={{ minWidth: `${cardWidth}%`,maxWidth: `${cardWidth}%` }}
                >
                  <div className="flex flex-col items-center  gap-6 mx-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-30 h-30 rounded-full border-gray-500 border-2 " />
                    <p className=" font-medium text-md ">{testimonial.review}</p>
                    <div className="text-sm text-gray-500 text-center">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.role}</p>
                      <p>{testimonial.location}</p>
                    </div>
                    <img src={testimonial.companyLogo} alt="Company Logo" className="w-20 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-2/8 right-11 transform -translate-y-1/2 md:right-15 z-20">
          <button onClick={prevSlide} className="p-2 bg-black text-white rounded-full mt-4  hover:bg-gray-700 z-90">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-2/8 right-0 transform -translate-y-1/2 md:right-3 z-20">
          <button onClick={nextSlide} className="p-2 bg-black text-white rounded-full mt-4 hover:bg-gray-700 z-90 ">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="absolute top-[115px] -left-1 w-25 transform -translate-y-1/2 md:right-1 -z-10">
         <img src={image1} alt="" />
        </div>
      </div>
      
      <div className="mb-20"></div>
      </div>
    </div>
  );
}






