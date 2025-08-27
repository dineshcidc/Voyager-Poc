import { ImagesPath } from "../helpers/imagesPath";
import ApplyNowOption from "../components/ApplyNowOption";

const BlogDetails = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-25">
      {/* banner section */}
      <div className="w-full rounded-4xl overflow-hidden">
        <img
          src={ImagesPath.BLOG_BANNER}
          alt="Background"
          className="w-full h-70 object-cover rounded-4xl overflow-hidden"
        />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between overflow-hidden gap-y-5 md:gap-y-0 md:gap-x-20">
        {/* left content */}
        <div className="flex flex-col lg:max-w-164 xl:max-w-3/4 gap-3 md:gap-8 order-2 md:order-1">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-lg">Home | Blog</h1>
            <h1 className="font-bold text-base md:text-3xl">
              Traveller Forex Cards vs. Cash vs. Credit Cards - Which Should You
              Carry Abroad?
            </h1>
            <h1 className="text-base md:text-lg">
              Published on Mar 1,2025 | 2 min read
            </h1>
          </div>
          <span className="mt-2 md:mt-0 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </span>
          <span className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborumLorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </span>
          <span className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </span>
          <span className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </span>
        </div>

        {/* right content */}
        <div className="flex flex-col gap-4 p-5 md:p-4 bg-gradient-1-end/30 rounded-2xl border-gradient-1-end/30 border-1 order-1 md:order-2 h-fit">
          <div className="flex flex-col items-center gap-2.5 md:gap-6">
            <div className="flex md:flex-col gap-3">
              {/* image */}
              <img
                src={ImagesPath.VISA_CARD}
                alt="visa_img"
                className="rounded-2xl w-35 md:w-full h-22 md:h-full"
              />
              {/* content */}
              <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xs md:text-xl">
                  Currency Freedom at Your Fingertips
                </h1>
                <h1 className="text-xs md:text-lg">
                  Smart, Travel Smarter links smart application with wise travel
                  finance.
                </h1>
              </div>
            </div>

            {/* button */}
            <button className="rounded-xl px-3 py-2 hover:cursor-pointer bg-gradient-3 text-white capitalize w-full font-bold">
              apply now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:gap-6">
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="uppercase text-base">related blogs</h1>
          <h1 className="text-xl md:text-[40px] font-bold">
            Your Guide to Smarter Money
          </h1>
        </div>
        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6.5 gap-y-10">
          <div className="rounded-3xl overflow-hidden bg-white">
            {/* Image Section */}
            <div className="relative">
              <img
                src={ImagesPath.BLOG_BANNER}
                alt="blog-banner"
                className="w-full h-85 md:h-101 object-cover rounded-b-3xl"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md rounded-b-3xl">
                <h3 className="text-xl font-bold text-white">Title HC</h3>
              </div>
            </div>

            {/* Date & Subtext */}
            <div className="px-6 py-5 flex flex-col gap-2">
              <div className="text-sm bg-gray-deepest rounded-xl px-3 py-2 w-fit">
                02 Mar 2025
              </div>
              <div className="text-base font-semibold">Thumbnail HC</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden bg-white">
            {/* Image Section */}
            <div className="relative">
              <img
                src={ImagesPath.BLOG_BANNER}
                alt="blog-banner"
                className="w-full h-85 md:h-101 object-cover rounded-b-3xl"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md rounded-b-3xl">
                <h3 className="text-xl font-bold text-white">Title HC</h3>
              </div>
            </div>

            {/* Date & Subtext */}
            <div className="px-6 py-5 flex flex-col gap-2">
              <div className="text-sm bg-gray-deepest rounded-xl px-3 py-2 w-fit">
                02 Mar 2025
              </div>
              <div className="text-base font-semibold">Thumbnail HC</div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden bg-white">
            {/* Image Section */}
            <div className="relative">
              <img
                src={ImagesPath.BLOG_BANNER}
                alt="blog-banner"
                className="w-full h-85 md:h-101 object-cover rounded-b-3xl"
              />

              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md rounded-b-3xl">
                <h3 className="text-xl font-bold text-white">Title HC</h3>
              </div>
            </div>

            {/* Date & Subtext */}
            <div className="px-6 py-5 flex flex-col gap-2">
              <div className="text-sm bg-gray-deepest rounded-xl px-3 py-2 w-fit">
                02 Mar 2025
              </div>
              <div className="text-base font-semibold">Thumbnail HC</div>
            </div>
          </div>
        </div>
      </div>
      <ApplyNowOption />
    </div>
  );
};

export default BlogDetails;
