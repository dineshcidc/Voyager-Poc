import { useParams } from "react-router-dom";

import { ImagesPath } from "../assets/ImagesPath";
import { formatDate } from "../helpers/dateFormat";
import { WithSanitizedHTML } from "../helpers/sanitizedHTML";
import { VerticalDivider } from "../components/VerticalDivider";

import { useGetOfferDetailsQuery } from "../redux/service/nubloApi";

const BlogDetails = () => {
  const { blog_id } = useParams();

  const {
    data: { data: response } = {},
    error,
    isLoading,
  } = useGetOfferDetailsQuery(blog_id);

  if (isLoading) return <div>Loading details...</div>;
  if (error) return <div>Error loading offer details</div>;

  const Section = ({ title, children }) => (
    <div className="flex flex-col gap-3 md:gap-5">
      <h1 className="font-bold md:text-3xl">{title}</h1>
      <div className="md:text-xl">{children}</div>
    </div>
  );

  const OfferCardField = ({ label, children, bordered }) => (
    <div
      className={`flex flex-col gap-1 ${
        bordered ? "border-2 rounded-2xl p-2.5 border-tertiary-4" : ""
      }`}
    >
      <h1 className="font-bold text-xs md:text-base">{label}</h1>
      <h2 className="text-sm md:text-lg">{children}</h2>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 md:gap-25">
      {/* banner section */}
      <div className="w-full rounded-4xl bg-amber-100 p-5.5 md:px-15 md:py-12">
        <div className="grid md:grid-cols-2 gap-7.5 md:gap-48 items-center">
          {/* left side content */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <h1 className="text-2xl md:text-5xl">Discover</h1>
            <span className="text-2xl md:text-5xl font-bold">
              Thailand with 20Off
            </span>
            <h2 className="text-xs md:text-lg">
              Book your dream Thailand trip now and enjoy 20% o. Beaches,
              culture, and adventure await you!
            </h2>
            <button className="text-xs md:text-base bg-gradient-3 rounded-xl px-3 py-2 font-bold text-white w-fit">
              Book now
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

      <div className="flex flex-col md:flex-row md:justify-between overflow-hidden gap-y-5 md:gap-y-0">
        {/* left content */}
        <div className="flex flex-col max-w-203 gap-3 md:gap-7 order-2 md:order-1">
          {/* overview */}
          <Section title="Overview">
            {WithSanitizedHTML(response?.offer_details.offer_overview)}
          </Section>

          {/* avail offer */}
          <Section title="How to Avail the Offer">
            {WithSanitizedHTML(
              response?.offer_details?.avail_offer,
              "list-disc pl-5 space-y-2"
            )}
          </Section>

          {/* terms and conditions */}
          <Section title="Terms & Conditions">
            {WithSanitizedHTML(
              response?.offer_details?.terms_conditions,
              "list-disc pl-5 space-y-2"
            )}
          </Section>
        </div>

        {/* right content */}
        <div className="bg-white rounded-2xl md:w-102 h-fit p-5 md:px-3.5 py-5 gap-5 flex flex-col order-1 md:order-2">
          <h1 className="font-bold text-base md:text-xl text-quaternary-1">
            Offer Plan Card
          </h1>

          {/* First row: Offer Title and Offer Validity */}
          <div className="flex gap-5 items-stretch">
            {/* offer title */}
            <div className="flex flex-col gap-1 flex-1">
              <h1 className="font-bold text-xs md:text-base">Offer Title</h1>
              <h2 className="text-sm md:text-lg">
                {response?.offer_details?.thumbnail_title}
              </h2>
              <h2 className="text-sm md:text-lg">Special - 20% OFF HC</h2>
            </div>

            {/* vertical line */}
            <VerticalDivider />

            {/* offer validity */}
            <div className="flex flex-col gap-1 flex-1">
              <h1 className="font-bold text-xs md:text-base">Offer Validity</h1>
              <h2 className="text-sm md:text-lg">
                {response?.offer_details?.validity || "HC"}
              </h2>
            </div>
          </div>

          {/* Second row: Travel Period and Booking Due Date */}
          <div className="flex gap-5 items-stretch">
            {/* travel period */}
            <div className="flex flex-col gap-1 flex-1">
              <h1 className="font-bold text-xs md:text-base">Travel Period</h1>
              <h2 className="text-sm md:text-lg">
                {response?.offer_details?.travel_period || "HC"}
              </h2>
            </div>

            {/* vertical line */}
            <VerticalDivider />

            {/* booking due date */}
            <div className="flex flex-col gap-1 flex-1">
              <h1 className="font-bold text-xs md:text-base">
                Booking Due Date
              </h1>
              <h2 className="text-sm md:text-lg">
                {response?.offer_details?.offer_end_date
                  ? formatDate(response.offer_details.offer_end_date)
                  : "HC"}
              </h2>
            </div>
          </div>

          {/* divider */}
          <div className="border-1 border-gray-light"></div>

          {/* eligibility */}
          <OfferCardField label="Eligibility">
            {response?.offer_details?.eligibility ||
              "All customers booking through Unimoni Travel across India and UAE HC"}
          </OfferCardField>

          {/* inclusions */}
          <OfferCardField label="Inclusions">
            {response?.offer_details?.inclusions ||
              "Flights, 4-star accommodation, guided tours, airport transfers HC"}
          </OfferCardField>

          {/* exclusions */}
          <OfferCardField label="Exclusions">
            {response?.offer_details?.exclusions ||
              "Visa fees, personal expenses, optional activities HC"}
          </OfferCardField>

          {/* special note */}
          <OfferCardField label="Special Note" bordered>
            {response?.offer_details?.special_note ||
              "Early bookings may get free room upgrades (subject to availability) HC"}
          </OfferCardField>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
