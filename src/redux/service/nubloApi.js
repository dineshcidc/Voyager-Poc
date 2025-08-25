import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ConfigUrl } from "../url";

const baseUrl = import.meta.env.VITE_API_URL;

export const nubloApi = createApi({
  reducerPath: "nubloApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ConfigUrl.POSTS,
      method: "GET",
    }),
  }),
});

// Export hooks for usage in components
export const { useGetPostsQuery } = nubloApi;
