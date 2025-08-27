import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import ApplyNowOption from "../components/ApplyNowOption";

const faqData = [
  {
    question:
      "Learn more about our Wizz Voyager Card with these frequently asked questions.",
    answer:
      "It offers multi-currency support, low forex markup, global acceptance, and 24x7 customer support.",
  },
  {
    question: "What is the Wizz Voyager Forex Card?",
    answer: `The Wizz Voyager Forex Card is a secure, RBI-compliant, multi-currency prepaid travel card issued by Unimoni. It allows you to:
    Spend globally at ATMs, POS terminals, and international e-commerce platforms
    Load and manage 17 foreign currencies seamlessly via the Wizz Voyager App
    Access India's only 24x7 live customer support on WhatsApp - via both call & Chat
    It's the peect travel companion for Indian students, tourists, and professionals going abroad.`,
  },
  {
    question:
      "Who is eligible to apply for the Wizz Voyager Forex Card in India?",
    answer:
      "Any Indian resident with valid KYC documents is eligible to apply for the Wizz Voyager Forex Card.",
  },
  {
    question:
      "What makes Wizz Voyager the best Forex Card for Indian travelers?",
    answer:
      "It offers multi-currency support, low forex markup, global acceptance, and 24x7 customer support.",
  },
  {
    question: "How can exchange currencies from the Wizz Voyager mobile app?",
    answer:
      "You can load, reload, and exchange currencies easily via the Wizz Voyager mobile app.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-10 md:gap-25">
      {/* banner section */}
      <div className="w-full rounded-4xl bg-amber-100 p-5.5 md:px-15 md:py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl font-bold capitalize">
            frequently asked questions
          </h1>
          <h2 className="text-xs md:text-xl mt-3">
            Learn more about how the Wizz Voyager Card works
          </h2>

          {/* Input field for search */}
          <div className="flex items-center justify-center mt-8">
            <div className="relative w-full flex items-center">
              <input
                id="search"
                type="text"
                className="pl-11 text-xs md:text-lg rounded-full border-1 w-full md:w-121 h-10 md:min-h-12.5 break-words whitespace-normal bg-white border-gray-off"
                aria-label="search"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <BiSearch className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* category buttons */}
          <div className="flex gap-2 md:gap-10 items-center flex-wrap justify-center mt-5">
            <button className="p-1 md:p-3 text-xs md:text-lg font-bold rounded-full border-1 w-20 md:w-35 md:min-h-12.5 text-center bg-gray-deepest border-quaternary-2">
              Adventure
            </button>
            <button className="p-1 md:p-3 text-xs md:text-lg font-bold rounded-full border-1 w-20 md:w-35 md:min-h-12.5 text-center bg-white border-gray-off hover:cursor-pointer hover:border-quaternary-2">
              Travel
            </button>
            <button className="p-1 md:p-3 text-xs md:text-lg font-bold rounded-full border-1 w-20 md:w-35 md:min-h-12.5 text-center bg-white border-gray-off hover:cursor-pointer hover:border-quaternary-2">
              Lifestyle
            </button>
            <button className="p-1 md:p-3 text-xs md:text-lg font-bold rounded-full border-1 w-20 md:w-35 md:min-h-12.5 text-center bg-white border-gray-off hover:cursor-pointer hover:border-quaternary-2">
              Luxury
            </button>
          </div>
        </div>
      </div>

      {/* FAQ content */}
      <div className="flex flex-col gap-6">
        {faqData.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl p-5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h1
                className={`${
                  openIndex === index ? "text-gradient-1-end" : ""
                } text-lg font-medium`}
              >
                {item.question}
              </h1>
              {openIndex === index ? (
                <FaMinus className="text-gray-600" />
              ) : (
                <FaPlus className="text-gray-600" />
              )}
            </div>

            {openIndex === index && (
              <div className="mt-3 text-gray-700 text-sm md:text-base whitespace-pre-line">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <ApplyNowOption />
    </div>
  );
};

export default FaqPage;
