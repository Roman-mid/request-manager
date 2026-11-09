import { baseApi } from '../../../app/api/baseApi';

import type {
  CreateRequestDto,
  Request,
  RequestStatusType,
} from '../../../../../shared/types/request';

export const requestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRequests: builder.query<Request[], void>({
      query: () => '/requests',
      providesTags: ['Requests'],
    }),

    getRequestById: builder.query<Request, string>({
      query: (id) => `/requests/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Requests', id }],
    }),

    createRequest: builder.mutation<Request, CreateRequestDto>({
      query: (body) => ({
        url: '/requests',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Requests'],
    }),

    deleteRequest: builder.mutation<void, string>({
      query: (id) => ({
        url: `/requests/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, error, id) =>
        error ? [] : ['Requests', { type: 'Requests', id }],
    }),

    updateRequestStatus: builder.mutation<
      Request,
      { id: string; status: RequestStatusType }
    >({
      query: ({ id, status }) => ({
        url: `/requests/${id}/status`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: (_result, error, { id }) =>
        error ? [] : ['Requests', { type: 'Requests', id }],
    }),
  }),
});

export const {
  useGetRequestsQuery,
  useGetRequestByIdQuery,
  useCreateRequestMutation,
  useDeleteRequestMutation,
  useUpdateRequestStatusMutation,
} = requestsApi;
