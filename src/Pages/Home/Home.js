import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast,  } from 'react-toastify';
import { useQuery } from "react-query";


const Home = () => {
   // const [tasks, setTasks] = useState([]);

   // useEffect( () => {
   //    fetch()
   // },[])

   const {
      isLoading,
      data: tasks,
      refetch,
    } = useQuery("task", () =>
      fetch("http://localhost:5000/task").then((res) =>
        res.json()
      )
    );

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

        <div>
         
        </div>
    </div>
  );
};

export default Home;
