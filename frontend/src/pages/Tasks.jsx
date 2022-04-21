import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Task from "../components/Task";
import { useParams } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newContentName, setNewContentName] = useState("");
  const [error, setError] = useState("");
  const { folder } = useParams();

  const getTasks = async () => {
    setError("");

    await axios
      .get(`http://localhost:3001/api/stories/${folder}`)
      .then(
        (res) =>
          Object.keys(res.data).length > 0 ? setTasks(res.data) : setTasks([]) // If it's empty, tasks will be equal to []
      )
      .catch((e) => setError("ERROR GETTING TASKS"));
  };

  useEffect(() => {
    const getTasks = async () => {
      await axios
        .get(`http://localhost:3001/api/stories/${folder}`)
        .then((res) =>
          Object.keys(res.data).length > 0 ? setTasks(res.data) : setTasks([])
        )
        .catch((e) => setError("ERROR GETTING TASKS"));
    };
    getTasks();
  }, [folder]);

  const alreadyExists = async () => {
    let exists = false;
    tasks.forEach((task) => {
      if (task.content === newContentName) {
        exists = true;
      }
    });
    return exists;
  };

  const createTask = async (e) => {
    setError("");

    e.preventDefault();
    if (!newContentName.trim()) return setError("Task must have a name");

    const exists = await alreadyExists();
    if (exists) {
      return setError(`Task with name ${newContentName} already exists`);
    }

    try {
      await axios.post(`http://localhost:3001/api/stories/${folder}`, {
        content: newContentName,
      });
      await getTasks();
    } catch (e) {
      setError("ERROR GETTING TASKS");
    }

    setNewContentName("");
    setError("");
  };

  const deleteTask = async (taskId) => {
    setError("");

    try {
      axios.delete(`http://localhost:3001/api/stories/${folder}/${taskId}`, {
        taskId,
      });
      await getTasks();
    } catch (e) {
      setError("ERROR REMOVING TASK");
    }
  };

  const toggleCheck = async (task) => {
    try {
      await axios.post(
        `http://localhost:3001/api/stories/${folder}/${task.id}`,
        {
          content: task.content,
          isChecked: !task.isChecked,
          FolderId: task.FolderId,
          taskId: task.id,
        }
      );
      await getTasks();
    } catch (e) {
      setError("ERROR CHANGING CHECK");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          {/*Tasks*/}
          <div className="col-md-8">
            <h2 className="display-4">Folders {">"} Tasks</h2>
            <ul className="list-group mt-4">
              {tasks.length ? (
                tasks.map((task) => (
                  <Task
                    key={task.id}
                    folder={folder}
                    task={task}
                    deleteTask={deleteTask}
                    toggleCheck={toggleCheck}
                  ></Task>
                ))
              ) : (
                <li className="list-group-item my-1">There are no tasks yet</li>
              )}
            </ul>
            {/*New Task*/}
            <form className="form-group d-flex mt-5">
              <input
                onChange={(e) => setNewContentName(e.target.value)}
                className="form-control"
                placeholder="New Task Name"
                type="text"
                value={newContentName ? newContentName : ""}
              />
              <input
                type="submit"
                className="btn btn-info ml-4 w-25"
                onClick={(e) => createTask(e)}
                value="Add Task"
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

export default Tasks;
