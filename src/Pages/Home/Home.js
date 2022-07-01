import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { toast,  } from 'react-toastify';
import { useQuery } from "react-query";
import Task from "./Task";
import Loading from "../Loading/Loading";


const Home = () => {

   const {
      isLoading,
      data: tasks,
      refetch,
    } = useQuery("task", () =>
      fetch("http://localhost:5000/task").then((res) =>
        res.json()
      )
    );
    if(isLoading){
      return <Loading></Loading>
    }
// console.log(tasks);
   const addTask = (event) => {
      event.preventDefault();
      let tasktitle = event.target.task.value;
      const task = {
         task: tasktitle
       };
               // Post a new task
      fetch('http://localhost:5000/task', {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(task),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           toast.success("Successfully Added");
           refetch()
         });
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

        <div className="text-center w-7/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mt-12 mb-5">All Task</h2>
         {
            tasks.map((task) => <Task 
               key={task._id} 
               task={task}
               refetch={refetch}
               ></Task>)
         }
        </div>
    </div>
  );
};

export default Home;
