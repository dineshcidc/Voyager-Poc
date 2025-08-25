import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { decryptPayload, encryptPayload } from "./encryption";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const customFetchBase = async (args, api, extraOptions) => {
  try {
    // Encrypt payload if exists
    if (args.body) {
      args.body = JSON.stringify(encryptPayload(args.body));
    }

    // Call the baseQuery with modified args
    const result = await baseQuery(args, api, extraOptions);

    // If error in response, pass it through
    if (result.error) return result;

    // Decrypt successful response data if possible
    if (result.data && result.data.data) {
      try {
        return { data: decryptPayload(result.data) };
      } catch (e) {
        // Decryption failed, propagate error
        return {
          error: {
            status: "DECRYPTION_FAILED",
            data: e.message,
          },
        };
      }
    }

    return result;
  } catch (err) {
    return {
      error: {
        status: "FETCH_BASE_QUERY_FAILED",
        data: err.message,
      },
    };
  }
};

export default customFetchBase;
