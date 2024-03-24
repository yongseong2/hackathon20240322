import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { accessToken: '', isAuthenticated: false };

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    }
  }
});

export const { setToken } = user.actions;
export default user.reducer;
