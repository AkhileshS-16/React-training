import apiWithTag from "./baseApi";

export const loginApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: "/employees/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
