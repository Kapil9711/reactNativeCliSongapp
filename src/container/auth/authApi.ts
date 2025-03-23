import rootApi, {endpoints} from '../../redux/rootApi';

// Extend the base API
export const authApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: userData => {
        return {
          url: endpoints.auth.login,
          method: 'post',
          body: userData,
        };
      },
    }),
  }),
});

// Export hooks
export const {useLoginUserMutation} = authApi;
