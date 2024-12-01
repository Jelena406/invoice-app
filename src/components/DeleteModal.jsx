import React, {useState} from 'react';

export default function DeleteModal({item, title}) {
  return (
    <>
      <div className="task-modal">
        <div className="task-modal-body">
          <h4>Delete this {item}?</h4>
          {item === 'task' ? (
            <p>Are you sure you want to delete the "{title}" task and its subtasks? This action cannot be reversed.</p>
          ) : (
            ''
          )}

          {item === 'board' ? (
            <p>
              Are you sure you want to delete the "{title}" board? This action will remove all columns and tasks and cannot be reversed.
            </p>
          ) : (
            ''
          )}
          <div className="buttons-holder">
            <button>Delete</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
// title je kljuc koji dolazi iz "data";
// item je ovdje kreiran, dalje ga koristimo:
// item === 'task' ? - uslovno renderovanje;
