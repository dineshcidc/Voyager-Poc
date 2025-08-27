import { BiSearch } from "react-icons/bi";

import FaqContent from "../components/FaqContent";
import ApplyNowOption from "../components/ApplyNowOption";

const FaqPage = () => {
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
      <FaqContent />

      <ApplyNowOption />
    </div>
  );
};

export default FaqPage;
