import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Task from "./Task";
import Loading from "../Loading/Loading";
import TaskEditModal from "./TaskEditModal";

const Home = () => {
  const [updateTask, setUpdateTask] = useState(null);
  const [tasktitle, setTasktitle] = useState("");

  const {
    isLoading,
    data: tasks,
    refetch,
  } = useQuery("task", () =>
    fetch("https://todo-task-app-endgame-server.herokuapp.com/task").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  const addTask = (event) => {
    event.preventDefault();
    const task = {
      task: tasktitle,
    };
    // Post a new task
    fetch("https://todo-task-app-endgame-server.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Successfully Added");
        setTasktitle("");
        refetch();
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-12 mb-5">
        Add a new Task
      </h2>
      <form onSubmit={addTask}>
        <div className="flex justify-center items-center">
          <div className="">
            <input
              type="text"
              name="task"
              placeholder="Type here"
              class="input input-bordered input-accent w-full max-w-xl"
              required
              onChange={(event) => setTasktitle(event.target.value)}
              value={tasktitle}
            />
          </div>
          <div className=" ml-3">
            <button type="submit">
              <FaPlusCircle className="text-3xl text-accent hover:text-4xl"></FaPlusCircle>
            </button>
          </div>
        </div>
      </form>

      <div className="text-center w-7/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mt-12 mb-5">All Task</h2>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            refetch={refetch}
            setUpdateTask={setUpdateTask}
          ></Task>
        ))}
      </div>
      {updateTask && (
        <TaskEditModal
          key={updateTask._id}
          updateTask={updateTask}
          setUpdateTask={setUpdateTask}
          refetch={refetch}
        ></TaskEditModal>
      )}
    </div>
  );
};

export default Home;
