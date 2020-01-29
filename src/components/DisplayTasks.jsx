import React, { useState } from "react";
import Task from "./Task";
import EditForm from "./EditForm";
import Sort from "./Sort";
// import PropTypes from 'prop-types'

function DisplayTasks({
  tasks,
  deleteTask,
  editRow,
  editing,
  setEditing,
  currentTask,
  updateTask,
  priorityIndex
}) {
  const [sorted, setSort] = useState(tasks);
  const toggleSort = () => {
    setSort(!sorted);
    console.log(sorted);
  };

  // if (sorted === true){
  //   tasks.sort((taska, taskb) => {
  //       return taska.priorityIndex - taskb.priorityIndex;
  //   })
  // } else {
  //   tasks.sort((taska, taskb) => {
  //     return taska.priorityIndex + taskb.priorityIndex;
  // })
  // }

  // const sortArrayHighest = tasks.sort((a, b) {
  //   return a.priorityIndex - b.priorityIndex;
  // });

  const sortedHigh = (tasks) => [...tasks].sort((a, b) => {
    return a.priorityIndex > b.priorityIndex
  });

  const sortedLow = (tasks) => [...tasks].sort((a, b) => {
    return a.priorityIndex < b.priorityIndex
  });
  
  const whichSort = sorted => {
    if (sorted === true) {
      sortedHigh(tasks);
      // [...tasksData]
    } else {
      sortedLow(tasks);
      // console.log(tasks);
    }
  };

  // whichSort(sorted);
  // console.log(tasks);
  return (
    <section className="container display-tasks">
      <div className="row">
        <div className="col-5">
          <h2>Task</h2>
        </div>
        <div className="col-5">
          <h2>Priority</h2>
        </div>
      </div>
      {tasks.length > 0 ? (
        editing ? (
            <EditForm setEditing={setEditing} currentTask={currentTask} updateTask={updateTask}></EditForm>
        ) : (
          tasks.map((taskItem, index) => {
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
        )
      ) : (
        <h2 className="text-center">There are no current tasks</h2>
      )}
    </section>
  );
}

// DisplayTasks.propTypes = {

// }

export default DisplayTasks;
