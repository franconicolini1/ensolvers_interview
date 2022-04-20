import React from "react";
import { useNavigate } from "react-router-dom";

const Folder = ({ folder, deleteFolder }) => {
  const navigate = useNavigate();

  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={folder.id}
      >
        {folder.name}
        <div>
          <button
            className="btn btn-info float-end ml-3 my-1"
            onClick={() => navigate(`/api/stories/${folder.id}`)}
          >
            View Items
          </button>
          <button
            className="btn btn-danger float-end mx-3 my-1"
            onClick={() => deleteFolder(folder.id)}
          >
            Remove
          </button>
        </div>
      </li>
    </>
  );
};

export default Folder;
