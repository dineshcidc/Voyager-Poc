import { useEffect, useState } from "react";

import ViewMoreBtn from "../components/ViewMoreBtn";

import {
  useGetOfferCategoriesMutation,
  useGetOffersListMutation,
} from "../redux/service/nubloApi";

const BlogPage = () => {
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
    <div className="flex flex-col gap-10 md:gap-25">
      {/* banner section */}
      <div className="w-full rounded-4xl bg-amber-100 p-5.5 md:px-15 md:py-12">
        {/* content */}
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-2xl md:text-5xl font-bold capitalize">
            Learn something new
          </h1>
          <h2 className="text-xs md:text-lg">
            Fresh Insights and experts tips delivered daily to fuel your
            curiosity and expand your horizons.
          </h2>
        </div>
      </div>

      {/* offer section - category selection tabs */}
      <div className="flex gap-2 md:gap-10 items-center justify-center">
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
      {/* Blog cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6.5 gap-y-10">
        {visibleOffers.length ? (
          visibleOffers.map((offer) => {
            const imageUrl = offer.thumbnail_image?.[0]?.image_url;
            return (
              <div
                key={offer.offer_id}
                className="rounded-3xl overflow-hidden bg-white"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={imageUrl}
                    alt={offer.thumbnail_title}
                    className="w-full h-85 md:h-101 object-cover rounded-b-3xl"
                  />

                  {/* Glassmorphism Overlay */}
                  <div className="absolute bottom-0 w-full p-5 bg-white/20 backdrop-blur-md rounded-b-3xl">
                    <h3 className="text-xl font-bold text-white">
                      {offer.banner_title}
                    </h3>
                  </div>
                </div>

                {/* Date & Subtext */}
                <div className="px-6 py-5 flex flex-col gap-2">
                  <div className="text-sm bg-gray-deepest rounded-xl px-3 py-2 w-fit">
                    02 Mar 2025
                  </div>
                  <div className="text-base font-semibold">
                    {offer.thumbnail_title}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white p-6 rounded-3xl shadow">
            <span>No offers available for this category</span>
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

export default BlogPage;
