import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UrlPath } from "../constants/path";
import { ImagesPath } from "../assets/ImagesPath";
import ViewMoreBtn from "../components/ViewMoreBtn";

import {
  useGetOfferCategoriesMutation,
  useGetOffersListMutation,
} from "../redux/service/nubloApi";

const OfferPage = () => {
  const navigate = useNavigate();

  const [getOfferCategories, { data: tabsData, error: tabsError }] =
    useGetOfferCategoriesMutation();

  const [getOffersList, { data: listData, error: listError }] =
    useGetOffersListMutation();

  const [activeCategory, setActiveCategory] = useState(null);

  // pagination
  const [visibleCount, setVisibleCount] = useState(3); // 👈 initially show 3

  // Fetch categories on component mount
  useEffect(() => {
    getOfferCategories({
      page: 1,
      // page 10 to 3
      per_page: 3,
      search: "",
      for_dropdown: true,
    });
  }, [getOfferCategories]);

  // Set default active category when categories are loaded
  useEffect(() => {
    if (tabsData && tabsData.data && tabsData.data.length > 0) {
      setActiveCategory(tabsData.data[0].category_id);
    }
  }, [tabsData]);

  // Fetch offers whenever active category changes
  useEffect(() => {
    if (activeCategory) {
      getOffersList({
        after: "",
        category_id: activeCategory,
      });
      // pagination
      setVisibleCount(3);
    }
  }, [activeCategory, getOffersList]);

  if (listError || tabsError) {
    return <div>Error loading data</div>;
  }

  const offers = listData?.data?.offer_data || [];
  const visibleOffers = offers.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col gap-10 md:gap-25">
      {/* carousel section */}
      <div className="flex flex-col gap-6 items-center">
        <div className="w-full rounded-4xl bg-amber-100 p-5.5 md:px-15 md:py-12">
          <div className="grid md:grid-cols-2 gap-7.5 md:gap-48 items-center">
            {/* left side content */}
            <div className="flex flex-col gap-5 order-2 md:order-1">
              <h1 className="text-2xl md:text-5xl">
                Wizz your money{" "}
                <span className="text-2xl md:text-5xl font-bold">
                  around the world
                </span>
              </h1>
              <h2 className="text-xs md:text-lg">
                Send money to India-or anywhere-instantly and securely with just
                one click.
              </h2>
              <button className="text-xs md:text-base bg-gradient-3 rounded-xl px-3 py-2 font-bold text-white w-fit">
                Get Started
              </button>
            </div>

            {/* right side image */}
            <img
              src={ImagesPath.OFFER_IMG_1}
              alt="Background"
              className="w-full h-70 object-cover rounded-4xl order-1 md:order-2"
            />
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="bg-tertiary-8 w-5 md:w-7.5 h-1.5 rounded-2xl"></div>
          <div className="bg-gray-medium w-2 h-2 rounded-2xl"></div>
          <div className="bg-gray-medium w-2 h-2 rounded-2xl"></div>
        </div>
      </div>

      {/* offer section - category selection tabs */}
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="uppercase text-quaternary-1">Offers</h1>
          <h1 className="text-xl font-bold">Explore wide range of offers</h1>
        </div>
        <div className="flex gap-2 md:gap-10 items-center flex-wrap justify-center">
          {tabsData?.data?.map((category) => (
            <button
              key={category.category_id}
              className={`p-3 text-xs md:text-lg font-bold rounded-lg border-2 w-20 md:w-35 md:min-h-12.5 break-words whitespace-normal text-center ${
                activeCategory === category.category_id
                  ? "bg-gray-deepest border-quaternary-2"
                  : "bg-white border-gray-off hover:cursor-pointer hover:border-quaternary-2"
              }`}
              onClick={() => setActiveCategory(category.category_id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* offer section - offer cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6.5 gap-y-10 px-4">
        {/* {listData?.data?.offer_data?.length ? (
          listData?.data?.offer_data?.map((offer) => { */}
        {visibleOffers.length ? (
          visibleOffers.map((offer) => {
            const imageUrl = offer.thumbnail_image?.[0]?.image_url;
            return (
              <div
                key={offer.offer_id}
                className="relative rounded-3xl overflow-hidden"
              >
                {/* Background Image */}
                <img
                  src={imageUrl}
                  alt={offer.thumbnail_title}
                  className="w-full h-85 md:h-101 object-cover"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md flex justify-center items-center gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {offer.banner_title}
                    </h3>
                    <p className="text-xs text-white/90">
                      {offer.thumbnail_title}
                    </p>
                  </div>
                  <div>
                    <button
                      className="text-xs md:text-sm bg-gradient-3 rounded-xl p-2 font-bold text-white w-26 hover:cursor-pointer"
                      onClick={() => {
                        navigate(
                          UrlPath.OFFER_DETAILS.replace(
                            ":offer_id",
                            offer.offer_id
                          )
                        );
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white p-3 rounded-md">
            No offers available for this category
          </div>
        )}
      </div>

      {/* view more button */}
      {visibleCount < offers.length && (
        <ViewMoreBtn
          label="View More"
          onClick={() => setVisibleCount((prev) => prev + 3)}
        />
      )}
    </div>
  );
};

export default OfferPage;
