import React from 'react';
import {useNavigation} from '../hooks/navigation';
import {useNavigate, useParams} from 'react-router';

export default function Sidebar() {
  const {boards, toggleTheme, toggleSidebar, isDarkTheme, isSidebarHidden} = useNavigation();
  const navigate = useNavigate();
  const {id} = useParams();
  return (
    <>
      <input type="checkbox" name="sidebar" id="sidebar" checked={isSidebarHidden} onChange={toggleSidebar} />
      <label htmlFor="sidebar">
        <img src="/assets/eye-icon.svg" alt="" />
      </label>
      <div className="sidebar">
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

          {/* krecemo od shared 
u inicijalne vrijednost shared slice dodati vrijednost isSidebar hidden 
i dodati joj vrijednost false
napravi u reducer-u shared slice 2 funkcije 
prva funkcija je toggle sidebar koja treba da togluje isSidebarhidden
druga f-ija setSideBarHidden koja treba da setuje sidebar state na vrijednost koju dobije
na inicijalno ucitavanje aplikacije procitati vrijednost iz local storage
 koji se zove isSideBarHidden
i pozvati funkciju setSideBarHidden i proslediti joj argument iz locale st
input polje koje kontrolise da li je sidebar sakriven proslediti trenutnu vr iz IsSidebarHidden 
na inputu imamo changeHandler koji ce pozivati f-iju toggleSideBar i setovati u locale st */}

          <div>
            <div className="switch-input">
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
        <label htmlFor="sidebar">
          <img src="/assets/eye-slash.svg" alt="" />
          <h5>Hide Sidebar</h5>
        </label>
      </div>
    </>
  );
}
