import { createApi } from "@reduxjs/toolkit/query/react";

import { ConfigUrl } from "../url";
import customFetchBase from "../customFetchBase";

export const nubloApi = createApi({
  reducerPath: "nubloApi",
  baseQuery: customFetchBase,

  endpoints: (builder) => ({
    // POST /list-category
    getOfferCategories: builder.mutation({
      query: (payload) => ({
        url: ConfigUrl.OFFER_CATEGORIES, // "list-category"
        method: "POST",
        body: payload,
      }),
    }),
    // POST /offers
    getOffersList: builder.mutation({
      query: (payload) => ({
        url: ConfigUrl.OFFER_LIST,
        method: "POST",
        body: payload, // Pass plain JS payload here
      }),
    }),
    // GET /offers/:offer_id
    getOfferDetails: builder.query({
      query: (offer_id) => ({
        url: ConfigUrl.OFFER_DETAILS(offer_id), // `offers/${offer_id}`
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetOfferCategoriesMutation,
  useGetOffersListMutation,
  useGetOfferDetailsQuery,
} = nubloApi;
