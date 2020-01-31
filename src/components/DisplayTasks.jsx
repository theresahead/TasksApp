import React from "react";
import Task from "./Task";
import Sort from "./Sort";

function DisplayTasks({
  tasks,
  deleteTask,
  editRow,
  editing,
  setEditing,
  currentTask,
  updateTask,
  toggleSorting,
}) {

  return (
    <section className="container display-tasks">
      <div className="row">
        <div className="col-5">
          <h2>Task</h2>
        </div>
        <div className="col-5">
          <h2>Priority</h2>
        </div>
        <div className="col-2">
          <Sort toggleSorting={toggleSorting}></Sort>
        </div>
      </div>
          {tasks.map((taskItem, index) => {
            return (
              <Task
                taskItem={taskItem}
                deleteTask={deleteTask}
                key={index}
                editRow={editRow}
                editing={editing}
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              ></Task>
            );
          })
        }
    </section>
  );
}


export default DisplayTasks;
