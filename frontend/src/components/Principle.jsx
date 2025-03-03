import { useState } from "react";
import image1 from "../images/test.png";
const principles = [
  { title: "Amplify Voices", content: "We are committed to enabling individuals to share their thoughts openly." },
  { title: "Strengthen Connections and Communities", content: "Encouraging deep interactions and meaningful relationships." },
  { title: "Empower Everyone", content: "Making our technology inclusive and accessible for all." },
  { title: "Ensure Safety and Safeguard Assets", content: "Focusing on security and privacy to protect users." },
  { title: "Cultivate Community and Belonging", content: "Encouraging strong relationships and meaningful engagement." },
  { title: "Protect People and Their Digital Space", content: "Prioritizing safety, security, and privacy in all we do." },
  { title: "Create an Inclusive Future ", content: "Ensuring technology is accessible and beneficial for all." },
];

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b ">
    <button
      className="flex justify-between items-start w-full py-4 px-6 text-lg font-semibold text-gray-800 focus:outline-none"
      onClick={onClick}
    ><div className="text-start">
      {title}</div>
      <span className="text-xl ">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && <p className="px-6 pb-4 text-gray-600 ">{content}</p>}
  </div>
);

export default function PrinciplesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-8/12 mx-auto px-4 py-12 ">
      <h2 className="text-5xl font-bold text-center mb-4 ">Our <span className="text-blue-600 text-6xl">Principles</span> </h2>
      <p className="text-center text-gray-600 mb-12 text-xl ">
      Our guiding principles shape the way we craft technology—with care, inclusivity, and a profound respect for the diverse relationships that bring people together.
      </p>
      <div className="grid md:grid-cols-2 gap-11 items-start ">
        <div className="order-2 md:order-1 text-xl ">
          {principles.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        <div className="order-1 md:order-2">
          <img
            src ={image1}
            alt="People collaborating"
            className="rounded-4xl shadow-2xl w-full object-cover border-gray-500 border-2"
          />
        </div>
      </div>
    </div>
  );
}

