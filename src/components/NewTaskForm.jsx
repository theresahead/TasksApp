import React, {useState} from 'react'

function NewTaskForm({addTask, setModalIsOpen}) {
    const initialFormState = {id: null, task: "", priority: "", priorityIndex: null};
    // taskItem is the current task item
    const [taskItem, setTask] = useState(initialFormState);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setTask({...taskItem, [name]: value})
    }
    
    return (
        <form className="container" onSubmit={ e => {
            e.preventDefault();
            if(!taskItem.task || !taskItem.priority) return;
            addTask(taskItem);
            setTask(initialFormState);
            setModalIsOpen(false);
        }}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="task">Task</label>
                        <input 
                            value={taskItem.task} 
                            onChange={handleInputChange}
                            name="task" 
                            className="form-control" 
                            type="text"/>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select 
                            value={taskItem.priority}
                            onChange={handleInputChange}
                            className="form-control" 
                            name="priority">
                            <option>Add Priority</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary mr-3">Add Task</button>
                    <button onClick={() => setModalIsOpen(false)} className="btn btn-danger">Cancel</button>
                </div>
            </div>
        </form>
    )
}


export default NewTaskForm

