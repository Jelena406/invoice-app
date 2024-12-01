import React, {useState} from 'react';
import {Logo} from './icons/Logo';
import {useNavigation} from '../hooks/navigation';
import {useLocation, useNavigate, useParams} from 'react-router';

export default function Header(theme) {
  const {boards, toggleTheme, isDarkTheme} = useNavigation();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const {id, columnId, taskId} = useParams();
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const handleDropdown = () => {
    setDropdownMenu((prev) => !prev);
  };
  const handleClose = () => {
    setDropdownMenu(false);
  };
  return (
    <>
      <div className="header">
        <div className="logo" data-testid="logo">
          {<Logo text={isDarkTheme ? '#ffffff' : undefined} />}
        </div>
        <img className="mobile-logo" src="/assets/rectangles-logo.svg" alt="Logo"></img>
        <div className="header-title">
          <h2 className="active-board" onClick={handleDropdown}>
            {id ?? pathname?.split('/').at(-1).replace('-', ' ')}
          </h2>
          <img data-dropdown-menu={dropdownMenu} className="arrow" src="/assets/arrow-down.svg" alt="Menu open"></img>
          <div className="btn-section">
            <button
              className="new-task"
              onClick={() => navigate(`/new-task-dashboard/${id}/column/${columnId}/task`)}
              disabled={!id}
              title={!id ? 'Please choose the board!' : ''}
            >
              + Add New Task
            </button>
            <img className="mobile-btn" src="/assets/mobile-btn.svg" alt="Menu closed" />
            <button
              className="dots"
              onClick={() => navigate(`/edit-task-dashboard/${id}/column/${columnId}/task/${taskId}/edit`)}
              disabled={!id}
            >
              <img src="/assets/dots.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/**mobile */}
      {dropdownMenu && (
        <div className="overlay" onClick={handleClose}>
          <div className="modal" id="myModal">
            <div className="sidebar-mobile">
              <h5>ALL BOARDS</h5>
              <div className="section">
                <div>
                  {boards.map((board) => (
                    <div key={board} className={`board ${board === id ? 'active' : ''}`} onClick={() => navigate('/dashboard/' + board)}>
                      <img src="/assets/board-icon.svg" alt="" />
                      <p>{board}</p>
                    </div>
                  ))}
                  <div key={'board'} className="board" onClick={() => navigate('/new-dashboard')}>
                    <img src="/assets/purple-board-icon.svg" alt="" />
                    <p>+ Create New Board</p>
                  </div>
                </div>
                <div>
                  <div className="switch-input" onClick={(e) => e.stopPropagation()}>
                    <img src="/assets/sun.svg" alt="" />
                    <div className="switch">
                      <input type="checkbox" id="switch" checked={isDarkTheme} onChange={toggleTheme} />
                      <label htmlFor="switch">
                        <span></span>
                      </label>
                    </div>
                    <img src="/assets/moon.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// <h2 >
// {id ?? pathname?.split('/').at(-1).replace('-', ' ')}
// </h2>
// Ako je id definisan i nije null ili undefined, koristiće se vrednost id;
// Ako je id null ili undefined, koristimo desnu stranu
// at(-1) uzima poslednji element niza;
