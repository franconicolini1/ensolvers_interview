import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";

const EditTask = () => {
  const { taskId, folder } = useParams();
  const [task, setTask] = useState({});
  const [error, setError] = useState("");
  const [newContentName, setNewContentName] = useState(
    task.content ? task.content : ""
  );

  const navigate = useNavigate();

  useEffect(() => {
    setError("");

    const getTaskById = async () => {
      await axios
        .get(`http://localhost:3001/api/stories/1/${taskId}`)
        .then((res) => setTask(res.data))
        .catch(() => setError("ERROR GETTING TASK"));
    };
    getTaskById();
  }, [taskId]);

  const alreadyExists = async () => {
    // Only in the same folder
    const tasks = await axios
      .get(`http://localhost:3001/api/stories/${folder}`)
      .then((res) => (Object.keys(res.data).length > 0 ? res.data : []))
      .catch((e) => console.log(e));

    let exists = false;

    tasks.forEach((task) => {
      if (task.content === newContentName) {
        exists = true;
      }
    });

    return exists;
  };

  const saveNewContent = async (e) => {
    e.preventDefault();
    setError("");

    if (!newContentName.trim()) return setError("Task must have a name");

    const exists = await alreadyExists();
    if (exists) {
      return setError(
        `Task with name ${newContentName} already exists in this folder`
      );
    }

    try {
      await axios.post(
        `http://localhost:3001/api/stories/${folder}/${taskId}`,
        {
          content: newContentName,
          isChecked: task.isChecked,
        }
      );
    } catch (e) {
      setError("ERROR UPDATING TASK");
    }

    setNewContentName("");
    setError("");
    navigate(-1);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-8">
            <h1>{task.content ? `Editing Task ${task.content}` : error}</h1>
            <form className="form-group d-flex mt-5 flex-wrap">
              <input
                onChange={(e) => setNewContentName(e.target.value)}
                className="form-control"
                placeholder="New Content Name"
                type="text"
                value={newContentName ? newContentName : ""}
              />
              <input
                type="submit"
                className="btn btn-info ml-4 mt-5 w-25"
                onClick={(e) => saveNewContent(e)}
                value="Save"
              />
              <input
                type="button"
                className="btn btn-secondary ml-4 w-25 mt-5"
                onClick={() => navigate(-1)}
                value="Cancel"
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
};

export default EditTask;
