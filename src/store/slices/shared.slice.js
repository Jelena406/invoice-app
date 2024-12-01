import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  modalName: '',
  isDarkTheme: false,
  isSidebarHidden: true,
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state = action.payload;
      return state;
    },
    setModalClose: (state) => {
      state = { modalName: '', modalOpen: false };
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
      return state
    },
    setTheme: (state, action) => {
      state.isDarkTheme = action.payload
      return state
    },
    noop: (state) => {
      state = initialState
      return state
    },
    toggleSidebar: (state) => {
      state.isSidebarHidden = !state.isSidebarHidden
      return state
    },
    setSidebarHidden: (state, action) => {
      state.isSidebarHidden = action.payload
      return state
    }
  },
});
