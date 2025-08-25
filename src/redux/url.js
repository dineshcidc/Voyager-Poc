// API endpoints configuration object

export const ConfigUrl = {
  OFFER_LIST: "offers",
  OFFER_CATEGORIES: "list-category",
  OFFER_DETAILS: (offer_id) => `offers/${offer_id}`,
};
