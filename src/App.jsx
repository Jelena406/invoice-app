import {Route, Routes, useNavigate} from 'react-router';
import React, {useEffect} from 'react';
import Boards from './components/Boards';

import {useDispatch} from 'react-redux';
import {sharedSlice} from './store/slices/shared.slice';
import Layout from './components/Layout';

// import Home from './components/Home';
import NewDashboard from './components/NewDashboard';
// import Dashboard from './components/Dashboard';
import EditDashboard from './components/EditDashboard';
// import ColumnDashboard from './components/ColumnDashboard';
import EditColumnDashboard from './components/EditColumnDashboard';
// import Task from './components/Task';
import NewTaskDashboard from './components/NewTaskDashboard';
import EditTaskDashboard from './components/EditTaskDashboard';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('isDark'));
    const isSidebarHidden = JSON.parse(localStorage.getItem('isSidebarHidden'));
    dispatch(sharedSlice.actions.setTheme(!!isDark));
    dispatch(sharedSlice.actions.setSidebarHidden(!!isSidebarHidden));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/new-dashboard" element={<NewDashboard />} />
        <Route path="/dashboard/:id" element={<Boards />} />
        <Route path="/dashboard/:id/edit" element={<EditDashboard />} />
        <Route path="/dashboard/:id/column/:columnId" element={<h1>ColumnDashboard</h1>} />
        <Route path="/dashboard/:id/column/:columnId/edit" element={<EditColumnDashboard />} />
        <Route path="/dashboard/:id/column/:columnId/task/:taskId" element={<h1>Task</h1>} />
        <Route path="/new-task-dashboard/:id/column/:columnId/task" element={<NewTaskDashboard />} />
        <Route path="/edit-task-dashboard/:id/column/:columnId/task/:taskId/edit" element={<EditTaskDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
