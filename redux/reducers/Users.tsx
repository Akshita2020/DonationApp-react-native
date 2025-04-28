import {createSlice} from '@reduxjs/toolkit';

interface UserProps {
  firstName: string;
  lastName: string;
  userId: number;
}

const intialState: UserProps = {
  firstName: 'Akshita',
  lastName: 'Tiwari',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {
    updateFirstName: (state: UserProps, action: {payload: string}) => {
      state.firstName = action.payload;
    },
  },
});

export const {updateFirstName} = User.actions;

export default User.reducer;
