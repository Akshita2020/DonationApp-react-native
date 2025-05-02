import {createSlice} from '@reduxjs/toolkit';

const intialState = {
  isLoggedIn: false,
  profileImage:
    'https://images.unsplash.com/photo-1745604785337-96f95b719df5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
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
