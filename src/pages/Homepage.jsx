import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Path } from "../components/path";
import { ImagesPath } from "../assets/ImagesPath";

import {
  useGetOfferCategoriesMutation,
  useGetOffersListMutation,
} from "../redux/service/nubloApi";

const bgImages = [
  ImagesPath.BG_IMAGE_1,
  ImagesPath.BG_IMAGE_2,
  ImagesPath.BG_IMAGE_3,
];

const HomePage = () => {
  const navigate = useNavigate();

  const [
    getOfferCategories,
    { data: tabsData, error: tabsError, isLoading: tabsLoading },
  ] = useGetOfferCategoriesMutation();

  const [
    getOffersList,
    { data: listData, error: listError, isLoading: listLoading },
  ] = useGetOffersListMutation();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    getOfferCategories({
      page: 1,
      per_page: 10,
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
    }
  }, [activeCategory, getOffersList]);

  // image
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Duration for each transition, adjust for speed

    return () => clearInterval(interval);
  }, []);

  if (listError || tabsError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-4">
      {bgImages.map((img, idx) => (
        <img
          key={img}
          src={img}
          alt={`Background ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
            activeIndex === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: idx }}
        />
      ))}
      <div className="overflow-scroll h-full">
        {/* <img
            src={ImagesPath.BACKGROUND_IMG}
            alt="bg_img"
            className="w-full object-cover h-64"
          /> */}

        {!tabsLoading ? (
          <div className="flex gap-4 justify-center items-center">
            {tabsData?.data?.map((category) => (
              <button
                key={category.category_id}
                className={`bg-amber-600 rounded-2xl p-4 text-3xl hover:cursor-pointer ${
                  activeCategory === category.category_id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.category_id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        ) : (
          <h1>tabs loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
        {!tabsLoading && !listLoading ? (
          <div className="bg-zinc-200 grid grid-cols-3 gap-4 p-4">
            {listData?.data?.offer_data?.length ? (
              listData?.data?.offer_data.map((offer) => (
                <button
                  key={offer.offer_id}
                  className="bg-white p-3 rounded-md hover:cursor-pointer"
                  onClick={() => {
                    navigate(
                      Path.OFFER_DETAILS.replace(":offer_id", offer.offer_id)
                    );
                  }}
                >
                  <h3>{offer.banner_title}</h3>
                </button>
              ))
            ) : (
              <div className="bg-white p-3 rounded-md">
                No offers available for this category
              </div>
            )}
          </div>
        ) : (
          <h1>list loading</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
