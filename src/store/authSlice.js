import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (username, password, { rejectWithValue }) => {
    try {
      const token = axios.post(
        'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login',
        {
          username,
          password,
        },
      );
      console.log(token)

      return token.toJSON();
    } catch (error) {
      return rejectWithValue(error.code);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    errors: null,
  },
  reducers: {
    increaseCurrentScore(state) {
      state.currentGameScore += 100;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      console.log(payload, 'PAYLOAD')
      // state.totalScore = payload;
    });
  },
});
export const { increaseCurrentScore } = authSlice.actions;

export default authSlice.reducer;
