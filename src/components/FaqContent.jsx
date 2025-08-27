import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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

const FaqContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
};

export default FaqContent;
