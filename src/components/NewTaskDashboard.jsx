import React, {useState} from 'react';

export default function NewTaskDashboard() {
  const [state, setState] = useState({
    title: '',
    description: '',
    status: '',
    subtasks: [
      {
        title: '',
        isCompleted: true,
      },
    ],
    error: false,
  });

  const handleChange = (e) => {
    setState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleSubtaskChange = (e, index) => {
    const updatedSubtasks = [...state.subtasks];
    updatedSubtasks[index].title = e.target.value;
    setState((prev) => ({...prev, subtasks: updatedSubtasks}));
  };

  const handleSubmit = () => {
    if (!state.subtasks.some((subtask) => subtask.title)) {
      setState((prev) => ({...prev, error: true}));
    } else {
      setState((prev) => ({...prev, error: false}));
    }
  };

  const addNewSubtask = () => {
    setState((prev) => ({
      ...prev,
      subtasks: [...prev.subtasks, {title: '', isCompleted: false}],
    }));
  };

  const removeSubtask = (index) => {
    const updatedSubtasks = [...state.subtasks];
    updatedSubtasks.splice(index, 1);
    setState((prev) => ({...prev, subtasks: updatedSubtasks}));
  };

  const options = [
    {value: 'doing', label: 'Doing'},
    {value: 'todo', label: 'Todo'},
    {value: 'done', label: 'Done'},
  ];

  return (
    <>
      <div className="task-modal">
        <div className="task-modal-body">
          <h5>Add New Task</h5>
          <div className="text-input-field">
            <label htmlFor="title"> Title</label>
            <input type="text" id="title" name="title" placeholder="e.g. Take coffee break" value={state.title} onChange={handleChange} />
          </div>
          <div className="text-input-field">
            <label htmlFor="description"> Description</label>
            <textarea
              name="description"
              id="description"
              rows={3}
              placeholder="e.g. It’s always good to take a break. This 15-minute break will recharge the batteries a little."
              value={state.description}
              onChange={handleChange}
            />
          </div>
          <div className="text-input-field">
            <label htmlFor="subtask"> Subtasks</label>
            {state.subtasks.map((subtask, index) => (
              <div className="input-img" key={index}>
                <input
                  type="text"
                  id={`subtask-${index}`}
                  name={`subtask-${index}`}
                  placeholder="e.g. Make coffee"
                  value={subtask.title}
                  onChange={(e) => handleSubtaskChange(e, index)}
                  className={`${state.error && !subtask.title ? 'border-red' : ''}`}
                />
                {`${state.error && !subtask.title ? 'img-red' : ''}` ? (
                  <img src="/assets/remove-icon-red.svg" alt="" onClick={() => removeSubtask(index)} />
                ) : (
                  <img src="/assets/remove-icon.svg" alt="" onClick={() => removeSubtask(index)} />
                )}

                {state.error && !subtask.title && <span>Can't be empty</span>}
              </div>
            ))}
            <button onClick={addNewSubtask}>+ Add New Subtask</button>
          </div>
          <p>Status</p>
          <select name="status" id="doing" onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit}>Create Task</button>
        </div>
      </div>
    </>
  );
}
