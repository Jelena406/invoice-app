import React, {useState} from 'react';

export default function EditDashboard() {
  const [state, setState] = useState({
    name: '',
    columns: [
      {
        name: '',
      },
    ],
    error: false,
  });
  console.log(state);
  const handleChange = (e) => {
    setState((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleCol = (e, index) => {
    const updatedColumns = [...state.columns];
    updatedColumns[index].name = e.target.value;
    setState((prev) => ({...prev, columns: updatedColumns}));
  };

  // updatedColumns - stvara kopiju niza columns;
  // zatim, dodeljena mu je vrijednost koja se doda u - name;

  const addNewCol = () => {
    const updatedColumns = [...state.columns];
    updatedColumns.push({
      name: '',
    });
    setState((prev) => ({...prev, columns: updatedColumns}));
  };

  const handleSubmit = () => {
    if (!state.columns.some((column) => column.name)) {
      setState((prev) => ({...prev, error: true}));
    } else {
      setState((prev) => ({...prev, error: false}));
    }
  };

  // Ako ne postoji col.name  bar u jednoj  koloni,
  // postavlja se error na true kako bi se korisniku dala povratna informacija
  // o neispravnom unosu, nakon cega sledi:
  //  can't be empty;
  // u suprotnom, error je false;

  // const removeCol = (index) => {
  //   const updatedColumns = [...state.columns];
  //   updatedColumns.splice(index, 1);
  //   setState((prev) => ({ ...prev, columns: updatedColumns }));
  // };

  const removeCol = (index) => {
    const updatedColumns = state.columns.filter((col, i) => i !== index);
    setState((prev) => ({...prev, columns: updatedColumns}));
  };

  return (
    <>
      <div className="task-modal">
        <div className="task-modal-body">
          <h5>Edit Board</h5>
          <div className="text-input-field">
            <label htmlFor="name">Board Name</label>
            <input type="text" id="name" name="name" placeholder="e.g. Web Design" value={state.name} onChange={handleChange} />
          </div>
          <div className="text-input-field">
            <label htmlFor="columns">Board Columns</label>
            {state.columns.map((col, index) => (
              <div className="input-img" key={index}>
                <input
                  type="text"
                  id={`col-${index}`}
                  name={`col-${index}`}
                  placeholder="e.g. Make coffee"
                  value={col.name}
                  onChange={(e) => handleCol(e, index)}
                  className={`${state.error && !col.name ? 'border-red' : ''}`}
                />
                {`${state.error && !col.name ? 'img-red' : ''}` ? (
                  <img src="/assets/remove-icon-red.svg" alt="" onClick={() => removeCol(index)} />
                ) : (
                  <img src="/assets/remove-icon.svg" alt="" onClick={() => removeCol(index)} />
                )}

                {state.error && !col.name && <span>Can't be empty</span>}
              </div>
            ))}
            <button onClick={addNewCol}>+ Add New Column</button>
          </div>
          <button onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </>
  );
}
