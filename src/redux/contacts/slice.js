import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      let newContacts = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.items = newContacts;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateContact.fulfilled](state, action) {
      // state.isLoading = false;
      // state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, {
        name: action.payload.name,
        number: action.payload.number,
      });
      // state.items.push(action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
