import React, {useState} from 'react'
// import PropTypes from 'prop-types'

function Task({index, task, deleteTask, editRow, editing, currentTask, updateTask}) {
    const [Task, setTask] = useState(currentTask);
    const handleInputChange = e => {
        const {name, value} = e.target;
        setTask({...Task, [name]: value});
    }
    return (
        <>
            {editing ? (
                <form 
                    onSubmit={e => {
                        e.preventDefault();
                        updateTask(task.id, task);
                    }} 
                    className="row">
                    <div className="col-5">
                    <input 
                        onChange={handleInputChange}
                        value={task.task} 
                        name="task" 
                        id="task" 
                        className="form-control" 
                        type="text"/>
                    </div>
                    <div className="col-3">
                        <select 
                            // value={task.priority}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="priority" 
                            name="priority">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success">Save</button>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary">Cancel</button>
                    </div>
                </form>
            ) : (
                    <div key={index} className="row task">
                        <div className="col-5">{task.task}</div>
                        <div className="col-3">{task.priority}</div>
                        <div className="col-2"><button className="btn btn-primary" onClick={() => {editRow(task)}}>Edit</button></div>
                        <div className="col-2"><button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button></div>
                    </div>
                )
            }
        </>
    )
}

// Task.propTypes = {

// }

export default Task

