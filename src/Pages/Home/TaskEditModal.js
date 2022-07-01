import React, { useState } from "react";
import { toast } from "react-toastify";


const TaskEditModal = ({ updateTask, setUpdateTask, refetch }) => {
  const [newTask, setNewTask] = useState(updateTask.task);
  const { task, _id } = updateTask;

  const updatedTask = {
    task: newTask,
  };

  const updateNewTask = () => {

    fetch(`https://todo-task-app-endgame-server.herokuapp.com/task/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Data is Updated = ", data);
        toast.success("Successfully Updated Task");
        refetch();
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Edit your previous task</h3>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Type Your Task</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={task}
              onChange={(e) => setNewTask(e.target.value)}
              class="input input-bordered input-accent w-full max-w-xl"
            />
          </div>
          <div class="modal-action">
            <label
              for="my-modal-6"
              onClick={updateNewTask}
              class="btn btn-accent"
            >
              Update
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
