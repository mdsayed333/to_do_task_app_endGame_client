import React, { useState } from "react";
import { toast } from "react-toastify";

const Task = ({ task, refetch, setUpdateTask }) => {
  const completeTask = task.task;
  const id = task._id;
  const url = `https://todo-task-app-endgame-server.herokuapp.com/task/${id}`;

  const complete = (event) => {
    event.preventDefault();
    const task = {
      task: completeTask,
    };
    fetch("https://todo-task-app-endgame-server.herokuapp.com/complete", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Successfully Complete Task");

        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            refetch();
          });
      });
  };

  return (
    <div class="alert shadow-lg mb-8">
      <div>
        <button onClick={complete}>
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-md hover:checkbox-accent"
          />
        </button>
        <span className="text-xl font-semibold">{task.task}</span>
      </div>
      <div class="flex-none">
        <label
          for="my-modal-6"
          onClick={() => setUpdateTask(task)}
          class="btn btn-sm btn-accent"
        >
          Edit
        </label>
      </div>
    </div>
  );
};

export default Task;
