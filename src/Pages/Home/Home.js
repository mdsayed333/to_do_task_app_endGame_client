import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {

   const addTask = (event) => {
      event.preventDefault();
      let task = event.target.task.value;
      console.log(task);
   }
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-12 mb-5">Add a new Task</h2>
        <form onSubmit={addTask}>
      <div className="flex justify-center items-center">
        <div className="">
          <input
            type="text"
            name="task"
            placeholder="Type here"
            class="input input-bordered input-accent w-full max-w-xl"
            required
          />
        </div>
        <div className=" ml-3">
         <button type="submit"><FaPlusCircle className="text-3xl text-accent hover:text-4xl"></FaPlusCircle></button>
        </div>
      </div>
        </form>
    </div>
  );
};

export default Home;
