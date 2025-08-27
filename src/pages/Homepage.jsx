import FaqContent from "../components/FaqContent";
import { ImagesPath } from "../helpers/imagesPath";
import ApplyNowOption from "../components/ApplyNowOption";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* About Us */}
      <div className="flex flex-col gap-5 md:gap-12">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="uppercase text-quaternary-1 text-base">about</h1>
          <h1 className="text-xl md:text-4xl font-bold">
            Innovation you can Trust
          </h1>
        </div>
        {/*  */}
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl">25+</h2>
            <p className="text-sm md:text-lg text-gray-600">
              Years of Expertise
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl">5mn</h2>
            <p className="text-sm md:text-lg text-gray-600">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl">350+</h2>
            <p className="text-sm md:text-lg text-gray-600">Branch Network</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 max-w-4xl"></div>

        {/* Logo Section */}
        <div className="flex justify-center">
          <img
            src={ImagesPath.UNIMONI_WIZZ_GROUP}
            alt="Unimoni Logo"
            className="object-contain h-13 md:h-27"
          />
        </div>
      </div>

      {/* Offer Section */}
      <div className="flex flex-col gap-5 md:gap-12">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="uppercase text-quaternary-1 text-base">Offers</h1>
          <h1 className="text-xl md:text-4xl font-bold">
            Rewarding the Way You Move
          </h1>
          <h1 className="text-xs md:text-lg">
            You're always on - so are we. Enjoy elite travel perks,
            international deals, and experiences tailored for the modern nomad.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6.5 gap-y-10 px-4">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src={ImagesPath.VISA_CARD}
              alt="visa_card"
              className="w-full h-85 md:h-101 object-cover"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md flex justify-center items-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  banner title HC
                </h3>
                <p className="text-xs text-white/90">thumbnail title HC</p>
              </div>
              <div>
                <button className="text-xs md:text-sm bg-gradient-3 rounded-xl p-2 font-bold text-white w-26 hover:cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src={ImagesPath.VISA_CARD}
              alt="visa_card"
              className="w-full h-85 md:h-101 object-cover"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md flex justify-center items-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  banner title HC
                </h3>
                <p className="text-xs text-white/90">thumbnail title HC</p>
              </div>
              <div>
                <button className="text-xs md:text-sm bg-gradient-3 rounded-xl p-2 font-bold text-white w-26 hover:cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <img
              src={ImagesPath.VISA_CARD}
              alt="visa_card"
              className="w-full h-85 md:h-101 object-cover"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md flex justify-center items-center gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">
                  banner title HC
                </h3>
                <p className="text-xs text-white/90">thumbnail title HC</p>
              </div>
              <div>
                <button className="text-xs md:text-sm bg-gradient-3 rounded-xl p-2 font-bold text-white w-26 hover:cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center gap-10">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold capitalize text-center">
            frequently asked questions
          </h1>
          <h2 className="text-xs md:text-xl mt-3 text-center">
            Learn more about how the Wizz Voyager Card works
          </h2>
        </div>

        <FaqContent />
      </div>

      {/* apply now section */}
      <ApplyNowOption />
    </div>
  );
};

export default HomePage;
