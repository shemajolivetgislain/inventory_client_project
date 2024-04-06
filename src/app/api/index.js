import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LOCAL_API_URL } from "../../constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: LOCAL_API_URL,
    prepareHeaders: (headers) => {
      const token = sessionStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      // LOGIN
      login: builder.mutation({
        query: ({ email, password }) => ({
          url: "/auth/login",
          method: "POST",
          body: {
            email,
            password,
          },
        }),
      }),
    };
  },
});

// export const {} = apiSlice;
