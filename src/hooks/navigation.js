import {useDispatch, useSelector} from 'react-redux';
import {sharedSlice} from '../store/slices/shared.slice';
import {useState} from 'react';

export function useNavigation() {
  const {isDarkTheme, isSidebarHidden} = useSelector((state) => state.shared);
  const dispatch = useDispatch();
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  const [activeBoard, setActiveBoard] = useState(boards[0]);
  const toggleTheme = () => {
    localStorage.setItem('isDark', !isDarkTheme);
    dispatch(sharedSlice.actions.toggleTheme());
  };
  const toggleSidebar = () => {
    localStorage.setItem('isSidebarHidden', !isSidebarHidden);
    dispatch(sharedSlice.actions.toggleSidebar());
  };
  const handleClick = (board) => {
    setActiveBoard(board);
  };

  return {
    boards,
    toggleTheme,
    toggleSidebar,
    handleClick,
    activeBoard,
    isDarkTheme,
    isSidebarHidden,
  };
}
