import React from 'react'
// import PropTypes from 'prop-types'

function Task({
    taskItem, 
    deleteTask, 
    editRow, 
    }) 
    {
    return (
        <div className="row task">
            <div className="col-5">{taskItem.task}</div>
            <div className="col-3">{taskItem.priority}</div>
            <div className="col-2">
                <button className="btn btn-primary" onClick={() => editRow(taskItem)}>Edit</button>
            </div>
            <div className="col-2">
                <button className="btn btn-danger" onClick={() => deleteTask(taskItem.id)}>Delete</button>
                {/* {console.log(task)} */}
            </div>
        </div>

    )
}

// Task.propTypes = {

// }

export default Task

