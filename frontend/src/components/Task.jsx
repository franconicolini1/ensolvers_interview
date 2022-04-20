import React from "react";
import { useNavigate } from "react-router-dom";

const Task = ({ task, deleteTask, folder, toggleCheck }) => {
  const navigate = useNavigate();

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={task.id}
      >
        {task.content}
        <div>
          {task.isChecked ? (
            <i
              className="far fa-check-circle pe-auto"
              onClick={() => toggleCheck(task)}
              style={{
                color: "#66bb6a",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            ></i>
          ) : (
            <i
              className="far fa-check-circle pe-auto"
              onClick={() => toggleCheck(task)}
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            ></i>
          )}
          <button
            className="btn btn-info float-end ml-3 my-1"
            onClick={() => navigate(`/api/stories/${folder.id}/${task.id}`)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger float-end mx-3 my-1"
            onClick={() => deleteTask(task.id)}
          >
            Remove
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
