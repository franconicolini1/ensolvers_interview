import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Task from "../components/Task";
import { useParams } from "react-router-dom";

function Tasks() {
  const [Tasks, setTasks] = useState({});
  const [newTaskName, setNewTaskName] = useState("");
  const [error, setError] = useState("");
  const { folder } = useParams();

  const getTasks = async () => {
    axios
      .get(`http://localhost:3001/api/stories/${folder}`)
      .then((res) => setTasks(res.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const getTasks = async () => {
      axios
        .get(`http://localhost:3001/api/stories/${folder}`)
        .then((res) => setTasks(res.data))
        .catch((e) => console.log(e));
    };
    getTasks();
  }, [folder]);

  const createTask = async (e) => {
    e.preventDefault();
    if (!newTaskName.trim()) return setError("Task must have a name");

    try {
      await axios.post(`http://localhost:3001/api/stories/${folder}`, {
        data: e.target.name,
      });
      await getTasks();
    } catch (e) {
      console.log(e);
    }

    setNewTaskName("");
    setError("");
  };

  const deleteTask = async (name) => {
    axios.delete(`http://localhost:3001/api/stories/${folder}`, {
      data: name,
    });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col"></div>
          {/*Tasks*/}
          <div className="col-md-8">
            <h2 className="display-4">Tasks</h2>
            <ul className="list-group mt-4">
              {Tasks.length ? (
                Tasks.map((task) => (
                  <Task task={task} deleteTask={deleteTask}></Task>
                ))
              ) : (
                <li className="list-group-item my-1">There are no tasks yet</li>
              )}
            </ul>
            {/*New Task*/}
            <form className="form-group d-flex mt-5">
              <input
                onChange={(e) => setNewTaskName(e.target.value)}
                className="form-control"
                placeholder="New Task Name"
                type="email"
                value={newTaskName ? newTaskName : ""}
              />
              <input
                type="submit"
                className="btn btn-primary ml-4 w-25"
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
