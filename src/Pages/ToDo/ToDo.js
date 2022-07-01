import React, { useState } from 'react';
import { useQuery } from "react-query";
import Task from '../Home/Task';
import TaskEditModal from '../Home/TaskEditModal';
import Loading from '../Loading/Loading';


const ToDo = () => {
   const [updateTask, setUpdateTask] = useState(null);

   const {
      isLoading,
      data: tasks,
      refetch,
    } = useQuery("task", () =>
      fetch("https://todo-task-app-endgame-server.herokuapp.com/task").then((res) =>
        res.json()
      )
    );
    if(isLoading){
      return <Loading></Loading>
    }
   return (
      <div className="text-center w-7/12 mx-auto">
        <h2 className="text-2xl font-bold text-center mt-12 mb-5">All To Do Task</h2>
         {
            tasks.map(task => <Task
               key={task._id} 
               task={task}
               refetch={refetch}
               setUpdateTask={setUpdateTask}
               ></Task>)
         }
         {
               updateTask && <TaskEditModal
               key={updateTask._id}
               updateTask={updateTask}
               setUpdateTask={setUpdateTask}
               refetch={refetch}
               ></TaskEditModal>
         }
        </div>
   );
};

export default ToDo;