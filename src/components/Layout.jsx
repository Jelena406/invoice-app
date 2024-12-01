import React from 'react';
import {Outlet} from 'react-router';
import Sidebar from './Sidebar';
import Header from './Header';
import {useNavigation} from '../hooks/navigation';

export default function Layout() {
  const {isSidebarHidden} = useNavigation();
  return (
    <>
      <div className="layout">
        <Header />
        <Sidebar />
        <div className="rigth" data-full-width={isSidebarHidden}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

// Outlet je komponenta često povezana s React Router-om,
// predstavlja mjesto gdje će se dinamički renderirati komponente
// koje odgovaraju trenutnoj ruti;
// rigth - dinamički se podešava širina desne oblasti (data-full-width={isSidebarHidden})
// u zavisnosti od toga da li je traka sa strane sakrivena ili vidljiva (isSidebarHidden)
