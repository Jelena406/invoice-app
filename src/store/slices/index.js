import {combineReducers} from '@reduxjs/toolkit';
import {sharedSlice} from './shared.slice';
import {boardsSlice} from './boards.slice';

export const rootReducer = combineReducers({
  shared: sharedSlice.reducer,
  boards: boardsSlice.reducer,
});
