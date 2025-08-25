import { useParams } from "react-router-dom";

import { useGetOfferDetailsQuery } from "../redux/service/nubloApi";

const OfferDetails = () => {
  const { offer_id } = useParams();

  const {
    data: { data: response } = {},
    error,
    isLoading,
  } = useGetOfferDetailsQuery(offer_id);

  if (isLoading) return <div>Loading details...</div>;
  if (error) return <div>Error loading offer details</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10">
      {/* banner section */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={
            response?.offer_details?.banner_image &&
            response?.offer_details?.banner_image?.length &&
            response?.offer_details?.banner_image[0]?.image_url
          }
          width={"100%"}
          alt=""
          className="img-banner"
          data-aos="fade-up"
        />
        <h1>{response?.offer_details?.banner_title || "Offer Details"}</h1>
      </div>

      {/* offer overview */}
      <div className="flex flex-col gap-1">
        <h5 className="font-semibold underline">OFFER OVERVIEW:</h5>
        {response?.offer_details?.offer_overview ? (
          <div
            dangerouslySetInnerHTML={{
              __html: response?.offer_details?.offer_overview,
            }}
          ></div>
        ) : (
          "-"
        )}
      </div>

      {/* validity */}
      <div className="flex gap-4">
        <h5 className="font-semibold underline">VALIDITY:</h5>
        <p>{response?.offer_details?.validity || "-"}</p>
      </div>

      {/* destinations */}
      <div className="flex gap-4">
        <h5 className="font-semibold underline">DESTINATIONS:</h5>
        <p>{response?.offer_details?.destination || "-"}</p>
      </div>

      {/* avail the offer */}
      <div className="flex flex-col gap-1">
        <h5 className="font-semibold underline">HOW TO AVAIL THE OFFER:</h5>
        <div>
          {response?.offer_details?.avail_offer ? (
            <div
              dangerouslySetInnerHTML={{
                __html: response?.offer_details?.avail_offer,
              }}
            ></div>
          ) : (
            "-"
          )}
        </div>
      </div>

      {/* terms & conditions */}
      <div className="flex flex-col gap-1">
        <h5 className="font-semibold underline">TERMS AND CONDITONS:</h5>
        <div>
          {response?.offer_details?.terms_conditions ? (
            <div
              dangerouslySetInnerHTML={{
                __html: response?.offer_details?.terms_conditions,
              }}
            ></div>
          ) : (
            "-"
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
