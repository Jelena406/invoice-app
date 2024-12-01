import React, {useState} from 'react';

export default function EditColumnDashboard() {
  const [state, setState] = useState({
    columns: [
      {
        name: '',
      },
    ],
  });

  const handleChange = (e) => {
    setState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const HandleSubmit = () => {
    const newName = state.name;
    if (newName) {
      setState((prev) => ({...prev, name: newName}));
    }
  };

  return (
    <div className="task-modal">
      <div className="task-modal-body">
        <h5>Edit Column</h5>
        <div className="text-input-field">
          <label htmlFor="title">Column Name</label>
          <inut type="text" id="title" name="title" placeholder="e.g. Take coffee break" value={state.name} onChange={handleChange} />
        </div>
        <button onClick={HandleSubmit}>Save Changes</button>
      </div>
    </div>
  );
}
