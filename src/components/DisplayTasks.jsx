import React from "react";
import Task from "./Task";
import EditForm from './EditForm';
// import PropTypes from 'prop-types'

function DisplayTasks({
  tasks,
  deleteTask,
  editRow,
  editing,
  setEditing,
  currentTask,
  updateTask
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
