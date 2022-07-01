import React from 'react';
import { toast,  } from 'react-toastify';


const Task = ({task, refetch}) => {
   // console.log(task);
   const completeTask = task.task;
   const id = task._id;
   const url = `https://todo-task-app-endgame-server.herokuapp.com/task/${id}`
   const complete = (event) => {
      event.preventDefault();
      const task = {
         task: completeTask
       };
      fetch('https://todo-task-app-endgame-server.herokuapp.com/complete', {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(task),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           toast.success("Successfully Complete Task");
           
           fetch(url, {
            method: "DELETE",
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            refetch();
          })

         });
   }
   return (
      <div class="alert shadow-lg mb-8">
      <div>
         <button onClick={complete}><input type="checkbox" checked="checked" class="checkbox checkbox-md hover:checkbox-accent" /></button>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
        <span className='text-xl font-semibold'>{task.task}</span>
      </div>
      <div class="flex-none">
        {/* <button class="btn btn-sm btn-ghost hover:bg-red-500">Delete</button> */}
        <button class="btn btn-sm btn-accent">Edit</button>
      </div>
    </div>
   );
};

export default Task;