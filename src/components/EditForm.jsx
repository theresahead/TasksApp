import React, {useState} from 'react'
// import PropTypes from 'prop-types'


function EditForm({setEditing, currentTask, updateTask}) {
    // currentTask = task thats currently being edited
    const [task, setTask] = useState(currentTask);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setTask({...task, [name]: value})
    }
    return (
        <form 
            onSubmit={ e => {
                console.log(task.id)
                e.preventDefault();
                updateTask(task.id, task);
            }} 
            className="row">
            <div className="col-5">
            <input 
                onChange={handleInputChange}
                value={task.task} 
                name="task" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="col-3">
                <select 
                    value={task.priority}
                    onChange={handleInputChange}
                    className="form-control" 
                    // id="priority" 
                    name="priority">
                    <option>Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div className="col-2">
                <button className="btn btn-success">Save</button>
            </div>
            <div className="col-2">
                <button onClick={() => setEditing(false)} className="btn btn-primary">Cancel</button>
            </div>
        </form>
    )
}

// EditForm.propTypes = {

// }

export default EditForm

