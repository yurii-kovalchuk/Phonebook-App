const { createSlice } = require('@reduxjs/toolkit');

const modalSlice = createSlice({
  name: 'modal',
  initialState: { isOpen: false, idx: null },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.idx = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.idx = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
