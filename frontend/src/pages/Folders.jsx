import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Folder from "../components/Folder";

function Folders() {
  const [folders, setFolders] = useState({});
  const [newFolderName, setNewFolderName] = useState("");
  const [error, setError] = useState("");

  const getFolders = async () => {
    axios
      .get("http://localhost:3001/api/stories")
      .then((res) => setFolders(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const getFolders = async () => {
      axios
        .get("http://localhost:3001/api/stories")
        .then((res) => setFolders(res.data))
        .catch((e) => console.log(e));
    };
    getFolders();
  }, []);

  const createFolder = async (e) => {
    e.preventDefault();

    if (!newFolderName.trim()) return setError("Folder must have a name");

    try {
      await axios.post("http://localhost:3001/api/stories", {
        data: newFolderName,
      });
      await getFolders();
    } catch (e) {
      console.log(e);
    }

    setNewFolderName("");
    setError("");
  };

  const deleteFolder = async (name) => {
    axios.delete("http://localhost:3001/api/stories", {
      data: name,
    });
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
                  <Folder folder={folder} deleteFolder={deleteFolder}></Folder>
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
                className="btn btn-primary ml-4 w-25"
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
