import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Folder from "../components/Folder";

function Folders() {
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState("");
  const [error, setError] = useState("");

  const getFolders = async () => {
    setError("");

    await axios
      .get("http://localhost:3001/api/stories")
      .then((res) =>
        Object.keys(res.data).length > 0 ? setFolders(res.data) : setFolders([])
      )
      .catch(() => setError("ERROR GETTING FOLDERS"));
  };

  useEffect(() => {
    setError("");

    const getFolders = async () => {
      await axios
        .get("http://localhost:3001/api/stories")
        .then((res) =>
          Object.keys(res.data).length > 0
            ? setFolders(res.data)
            : setFolders([])
        ) // If it's empty folders will be equal to []
        .catch(() => setError("ERROR GETTING FOLDERS"));
    };
    getFolders();
  }, []);

  const alreadyExists = async () => {
    let exists = false;
    folders.forEach((folder) => {
      if (folder.name === newFolderName) {
        exists = true;
      }
    });
    return exists;
  };

  const createFolder = async (e) => {
    e.preventDefault();
    setError("");

    if (!newFolderName.trim()) return setError("Folder must have a name");

    const exists = await alreadyExists();
    if (exists) {
      return setError(`Folder with name ${newFolderName} already exists`);
    }

    try {
      await axios.post("http://localhost:3001/api/stories", {
        name: newFolderName,
      });
      await getFolders();
    } catch (e) {
      setError("ERROR CREATING FOLDER");
    }

    setNewFolderName("");
    setError("");
  };

  const deleteFolder = async (id) => {
    setError("");

    try {
      await axios.delete(`http://localhost:3001/api/stories/${id}`, {
        id,
      });
      await getFolders();
    } catch (e) {
      setError("ERROR REMOVING FOLDER");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          {/*Folders*/}
          <div className="col-md-8">
            <h2 className="display-4">Folders</h2>
            <ul className="list-group mt-4">
              {folders.length ? (
                folders.map((folder) => (
                  <Folder
                    key={folder.id}
                    folder={folder}
                    deleteFolder={deleteFolder}
                  ></Folder>
                ))
              ) : (
                <li className="list-group-item my-1">
                  There are no folders yet
                </li>
              )}
            </ul>
            {/*New Folder*/}
            <form className="form-group d-flex mt-5">
              <input
                onChange={(e) => setNewFolderName(e.target.value)}
                className="form-control"
                placeholder="New Folder Name"
                type="email"
                value={newFolderName ? newFolderName : ""}
              />
              <input
                type="submit"
                className="btn btn-info ml-4 w-25"
                onClick={(e) => createFolder(e)}
                value="Add Folder"
              />
            </form>
            {/*Error*/}
            <p className="text-danger">{error}</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Folders;
