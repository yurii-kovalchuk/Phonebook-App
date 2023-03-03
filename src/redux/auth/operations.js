import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkApi) => {
    try {
      const resp = await axios.post('/users/signup', { name, email, password });
      toast('Success');
      return resp.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
