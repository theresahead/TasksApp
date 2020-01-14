import React from 'react'
// import PropTypes from 'prop-types'

function Task({index, task, deleteTask, editRow, editing}) {
    return (
        <div key={index} className="row task">
            {editing ? (
                <>
                    {/* <div className="col-5"><input type="text"/></div>
                    <div className="col-3"><select name="priority" id=""></select></div> */}
                    <div className="col-5"><h3>Editing mode</h3></div>
                    <div className="col-3"><h3>Editing Mode</h3></div>
                </>

            ) : (
                <>
                    <div className="col-5">{task.task}</div>
                    <div className="col-3">{task.priority}</div>
                </>
            )}
            <div className="col-2"><button className="btn btn-primary" onClick={() => {editRow(task)}}>Edit</button></div>
            <div className="col-2"><button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button></div>
            
        </div>
    )
}

// Task.propTypes = {

// }

export default Task

