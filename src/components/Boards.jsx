import React from 'react';
import {useNavigate} from 'react-router';
import {data} from '../data';

export default function Boards() {
  const navigate = useNavigate();

  const handleTask = (board, column, task) => {
    navigate(`/dashboard/${board}/column/${column}/task/${task}`);
  };

  return (
    <div className="boards-holder">
      <div className="boards">
        {data?.boards?.slice(0, 1).map((board, boardIndex) => (
          <div className="board-card" key={boardIndex}>
            {board?.columns?.map((column, columnIndex) => (
              <div className="task-card" key={columnIndex}>
                <div className="name">
                  <h6 className={'background-' + ((+columnIndex + 1) % 5)}></h6>
                  <h3>
                    {column.name.replace('-', ' ').toLocaleUpperCase()}({column.tasks.length})
                  </h3>
                </div>
                {column?.tasks?.map((task, taskIndex) => (
                  <div key={taskIndex} onClick={() => handleTask(boardIndex, columnIndex, taskIndex)} className="card-text">
                    <h2>{task.title}</h2>
                    <p>{`${task.subtasks.filter((subtask) => subtask.isCompleted).length} of ${task.subtasks.length} subtasks`}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="new-column">
          <h4 onClick={() => navigate('/dashboard/:id/column')}> +New Column</h4>
        </div>
      </div>
    </div>
  );
}

{
  /* <h6 className={'background-' + ((+columnIndex + 1) % 5)}></h6>:
Ime klase se dinamički generiše na osnovu vrednosti;
Rezultujuća klasa će biti:
'background-1', 'background-2', ..., 'background-5' na osnovu vrednosti 
columnIndex; 
+columnIndex: Ovaj deo pretvara promenljivu columnIndex u broj, 
koristeći  plus operator; */
}
