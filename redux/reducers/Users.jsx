import {createSlice} from '@reduxjs/toolkit';

const intialState = {
  isLoggedIn: false,
  profileImage:
    'https://plus.unsplash.com/premium_photo-1732757787074-0f95bf19cf73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ymx1ZSUyMGNhcnRvb24lMjBwcm9maWxlJTIwcGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
};
export const User = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...{isLoggedIn: true},
        ...action.payload,
      };
    },
    resetToInitialState: () => {
      return intialState;
    },
  },
});

export const {login, resetToInitialState} = User.actions;

export default User.reducer;
