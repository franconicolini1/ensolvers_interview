import React from "react";
import { useNavigate } from "react-router-dom";

const Folder = ({ folder, deleteFolder }) => {
  const navigate = useNavigate();

  return (
    <>
      <li className="list-group-item" key={folder.id}>
        {folder.name}
        <button
          className="btn btn-primary float-end"
          onClick={navigate(`/api/stories/${folder.id}`)}
        >
          View Items
        </button>
        <button
          className="btn btn-danger float-end"
          onClick={() => deleteFolder(folder.id)}
        >
          Remove
        </button>
      </li>
    </>
  );
};

export default Folder;
