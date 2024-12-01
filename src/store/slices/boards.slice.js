import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  currentBoard: null,
  currentTask: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState: initialState,
  reducers: {
    addBoards: (state, action) => {
      state.boards = action.payload;
      return state;
    },
    addBoard: (state, action) => {
      state.boards = state.boards.concat(action.payload);
      return state;
    },
    updateBoard: (state, action) => {
      state.boards = state.boards.map((board) => (board.id !== action.payload.id ? board : {...board, ...action.payload}));
      return state;
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload);
      return state;
    },
    setCurrentBoard: (state, action) => {
      state.currentBoard = state.boards.find((board) => board.id === action.payload);
      return state;
    },
    addTask: (state, action) => {
      const currentBoard = state.boards.find((board) => board.id === action.payload.boardId);
      currentBoard.tasks = currentBoard.tasks.concat(action.payload);
      state.boards = state.boards.map((board) => (board.id !== action.payload.boardId ? board : currentBoard));
      return state;
    },
    updateTask: (state, action) => {
      const currentBoard = state.boards.find((board) => board.id === action.payload.boardId);
      currentBoard.tasks = currentBoard.tasks.map((task) => (task.id !== action.payload.id ? task : {...task, ...action.payload}));
      state.boards = state.boards.map((board) => (board.id !== action.payload.boardId ? board : currentBoard));
      return state;
    },
    deleteTask: (state, action) => {
      const currentBoard = state.boards.find((board) => board.id === action.payload.boardId);
      currentBoard.tasks = currentBoard.tasks.filter((task) => task.id !== action.payload.id);
      state.boards = state.boards.map((board) => (board.id !== action.payload.boardId ? board : currentBoard));
      return state;
    },
    setCurrentTask: (state, action) => {
      const currentBoard = state.boards.find((board) => board.id === action.payload.boardId);
      state.currentTask = currentBoard.tasks.find((task) => task.id === action.payload.id);
      return state;
    },
    resetCurrentBoard: (state) => {
      state.currentBoard = null;
      return state;
    },
    resetCurrentTask: (state) => {
      state.currentTask = null;
      return state;
    },
  },
});
