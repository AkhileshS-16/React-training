import apiWithTag from "./baseApi";

export const employeeApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "/employees",
      providesTags: ["EMPLOYEE_LIST"],
    }),
    getEmployeeById: builder.query({
      query: (id) => `/employees/details/${id}`,
    }),
    addEmployee: builder.mutation({
      query: (body) => ({
        url: "/employees/",
        method: "POST",
        body,
      }),
    }),
    updateEmployee: builder.mutation({
      query: ({ eid, ...body }) => ({
        url: `/employees/${eid}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
    deleteEmployee: builder.mutation({
      query: ({ id }) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEE_LIST"],
    }),
  }),
});

export const {
  useGetEmployeeListQuery,
  useGetEmployeeByIdQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
