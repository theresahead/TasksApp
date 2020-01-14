import React from 'react'
import Task from './Task'
// import PropTypes from 'prop-types'

function DisplayTasks({tasks, deleteTask, editRow, editing}) {
    return (
        <section className="container display-tasks">
            <div className="row">
                <div className="col-5"><h2>Task</h2></div>
                <div className="col-5"><h2>Priority</h2></div>
            </div>
            {tasks.map((task, index) => {
          return (
            <Task 
              task={task} 
              key={index} 
              deleteTask={deleteTask} 
              editRow={editRow}
              editing={editing}
              >
            </Task>
          )
        })}
        </section>
    );
}

// DisplayTasks.propTypes = {

// }

export default DisplayTasks

