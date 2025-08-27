const TermsConditions = () => {
  const Section = ({ title, children }) => (
    <div className="flex flex-col gap-3 md:gap-5">
      <h1 className="font-bold text-base md:text-xl">{title}</h1>
      <div className="text-sm md:text-lg">{children}</div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 md:gap-25">
      {/* banner section */}
      <div className="w-full rounded-4xl bg-amber-100 p-5.5 md:px-15 md:py-12">
        {/* content */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-2xl md:text-5xl font-bold capitalize">
            Terms & Conditions
          </h1>
          <h2 className="text-xs md:text-xl">
            Issued by Unimoni Financial Services Ltd.
          </h2>
          <h2 className="text-xs md:text-base">
            Last Updated: 19/08/2025 | Effective Date: 19/08/2025
          </h2>
        </div>
      </div>

      {/* body content */}
      <div className="bg-yellow-300 p-3 md:p-8 flex flex-col gap-2 md:gap-6 rounded-2xl">
        {/* overview */}
        <Section title="Overview">
          Enjoy the beauty of Thailand with this special offer! Get 20% off on
          exclusive Thailand holiday packages from Unimoni Travel. Explore
          stunning beaches, vibrant culture, and unforgettable experiences at
          unbeatable prices.
        </Section>

        {/* avail offer */}
        <Section title="How to Avail the Offer">
          Visit the Unimoni Travel booking portal.
          <></>
          Select your preferred Thailand travel package.
          <></>
          Apply the promo code THAI20 at checkout.
          <></>
          Complete your booking and enjoy your discounted trip.
        </Section>

        {/* terms and conditions */}
        <Section title="Terms & Conditions">
          Offer valid only on Thailand packages booked through Unimoni Travel.
          <></>
          Discount applies to the base package price only.
          <></>
          Cannot be combined with other promotions or discounts.
          <></>
          Bookings are non-refundable once confirmed.
          <></>
          Unimoni Travel reserves the right to amend or withdraw the offer
          without prior notice.
        </Section>
      </div>
    </div>
  );
};

export default TermsConditions;
