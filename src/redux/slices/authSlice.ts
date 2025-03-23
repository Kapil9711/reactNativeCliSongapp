import {createSlice} from '@reduxjs/toolkit';
import {asyncHelper} from '../../utils/asyncStorageHelper';
import {authApi} from '../../container/auth/authApi';
import {globalNavigation} from '../../data/globalNavigation';

const initialState = {
  isLoggedIn: false,
  user: {},
  registrationSuccessfull: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: any) => {
      const {payload: user, type} = action;
      state.isLoggedIn = true;
      state.user = user;
      state.isLoading = false;
      asyncHelper.storeData('user', user);
    },
    logout: state => {
      state.isLoggedIn = false;
      state.user = {};
      asyncHelper.removeData('user');
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setRegisteratonSuccessfull: (state, {payload}) => {
      state.registrationSuccessfull = payload;
    },
  },
  extraReducers: builder => {
    // login user success
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled, // Listen to successful `addPost` mutations
      (state, action) => {
        console.log(action, 'userLogin');
        const {payload} = action;
        if (payload.success) {
          state.isLoggedIn = true;
          state.isLoading = false;
          state.user = payload.user;
          asyncHelper.storeData('user', payload.user);
          asyncHelper.storeData('token', payload.token);
          globalNavigation.navigation.navigate('Dashboard');
        }
      },
    );
    // login user error
    builder.addMatcher(
      authApi.endpoints.loginUser.matchRejected, // When login fails
      (state, action) => {
        console.log('Login Failed:', action); // Error message
        state.isLoggedIn = false;
        state.isLoading = false;
      },
    );

    // register user success
    builder.addMatcher(
      authApi.endpoints.registerUser.matchRejected, // When login fails
      (state, action) => {
        console.log(action);
        state.isLoading = false;
      },
    );
    // register user error
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled, // Listen to successful `addPost` mutations
      (state, action) => {
        console.log(action, 'userLogin');
        state.registrationSuccessfull = true;
        state.isLoading = false;
      },
    );
  },
});

export const {logout, login, setRegisteratonSuccessfull, setIsLoading} =
  authSlice.actions;

export default authSlice.reducer;
