import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {asyncHelper} from '../utils/asyncStorageHelper';

export const endpoints = {
  auth: {
    login: '/user/login',
    register: '/user',
  },
};

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://song-backend-two.vercel.app',
  prepareHeaders: async headers => {
    const token = await asyncHelper.getData('token'); // Get token from AsyncStorage
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// Root API Slice (Base API)
export const rootApi = createApi({
  reducerPath: 'api', // Unique identifier for this API
  baseQuery,
  endpoints: () => ({}),
});

export default rootApi;
