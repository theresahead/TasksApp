import React, {useState} from 'react'


function EditTaskForm({setEditing, setModalIsOpen, currentTask, updateTask, priorityIndex}) {
    // currentTask = task thats currently being edited
    const [task, setTask] = useState(currentTask);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setTask({...task, [name]: value})
    }

    const cancelEdit = () => {
        setEditing(false);
        setModalIsOpen(false);
    }
    return (
        <form className="container" onSubmit={ e => {
            e.preventDefault();
            priorityIndex(task);
            updateTask(task.id, task);
            setEditing(false);
            setModalIsOpen(false);
        }}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="task">Task</label>
                        <input 
                            onChange={handleInputChange}
                            value={task.task} 
                            name="task" 
                            className="form-control" 
                            type="text"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select 
                            value={task.priority}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="priority">
                            <option>Select Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-success mr-3">Save</button>
                    <button onClick={() => cancelEdit} className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </form>
    )
}


export default EditTaskForm

