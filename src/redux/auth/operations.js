import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const clearAuthToken = () => (axios.defaults.headers.common.Authorization = '');

export const register = createAsyncThunk(
  'auth/register',
  async (userRegInfo, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', userRegInfo);
      toast.success('Register successfully');
      setAuthToken(data.token);
      return data;
    } catch (err) {
      toast.error('Oops! Something went wrong');
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userLogInfo, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', userLogInfo);
      toast.success('Log ig successfully');
      setAuthToken(data.token);
      return data;
    } catch (err) {
      toast.error('Oops! Something went wrong');
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const { data } = await axios.post('/users/logout');
    toast.success('Log out successfully');
    clearAuthToken();
    return data;
  } catch (err) {
    toast.error('Oops! Something went wrong');
    return thunkApi.rejectWithValue(err.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue('Unable to fetch user');
  }
  setAuthToken(persistedToken);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (err) {
    // toast.error('Oops! Something went wrong');
    return thunkApi.rejectWithValue(err.message);
  }
});
