import React from "react";
import Loading from "../Loading/Loading";
import { useQuery } from "react-query";

const CompleteTask = () => {
  const {
    isLoading,
    data: tasks,
    refetch,
  } = useQuery("task", () =>
    fetch("https://todo-task-app-endgame-server.herokuapp.com/complete").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-7/12 mx-auto">
      <h2 className="text-2xl font-bold text-center mt-12 mb-5">
        All Completed Task
      </h2>
      {tasks.map((task) => (
        <div class="alert shadow-lg mb-8">
          <div>
            <span className="text-xl font-semibold">{task.task}</span>
          </div>
          <div class="flex-none"></div>
        </div>
      ))}
    </div>
  );
};

export default CompleteTask;
