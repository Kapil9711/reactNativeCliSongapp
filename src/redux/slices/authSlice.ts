import {createSlice} from '@reduxjs/toolkit';
import {asyncHelper} from '../../utils/asyncStorageHelper';
import {authApi} from '../../container/auth/authApi';

const initialState = {
  isLoggedIn: false,
  user: {},
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: any) => {
      const {payload: user, type} = action;
      state.isLoggedIn = true;
      state.user = user;
      asyncHelper.storeData('user', user);
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = {};
      asyncHelper.removeData('user');
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled, // Listen to successful `addPost` mutations
      (state, action) => {
        console.log(action, 'userLogin');
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected, // When login fails
      (state, action) => {
        console.log('Login Failed:', action); // Error message
        state.isLoggedIn = false;
      },
    );
  },
});

export const {logout, login} = authSlice.actions;

export default authSlice.reducer;
