import React, { useEffect, useState } from "react";
import axios from "axios";

function Folders() {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setnewFolderName] = useState("");
  const [error, setError] = useState("");

  const getFolders = async () => {
    axios
      .get(window.location.href)
      .then((res) => setFolders(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const getFolders = async () => {
      axios
        .get(window.location.href)
        .then((res) => setFolders(res.data))
        .catch((e) => console.log(e));
    };
    getFolders();
  }, []);

  const createFolder = async (e) => {
    e.preventDefault();
    if (!newFolderName.trim()) return setError("Folder must have a name");

    try {
      await axios.post(window.location.href, {
        data: e.target.name,
      });
      await getFolders();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteFolder = async (name) => {
    axios.delete(window.location.href, {
      data: name,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col ms-5">
          <h2>Folders</h2>
          <ul className="list-group mt-4">
            {folders.length ? (
              folders.map((folder) => (
                <li className="list-group-item" key={folder.id}>
                  {folder.name} - {folder.phone}
                  <button
                    className="btn btn-danger float-end"
                    onClick={() => deleteFolder(folder.id)}
                  >
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item">There are no folders yet</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Folders;
