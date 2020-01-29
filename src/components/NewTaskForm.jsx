import React, {useState} from 'react'
// import Task from './Task'
// import PropTypes from 'prop-types'
// import AddTask from './AddTask'



function NewTaskForm({addTask, setModalIsOpen}) {
    const initialFormState = {id: null, task: "", priority: "", priorityIndex: null};
    // taskItem is the current task item
    const [taskItem, setTask] = useState(initialFormState);
    // const [isModalOpen, setModalIsOpen] = useState(true);

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
                    <button className="btn btn-primary">Add Task</button>
                    <button onClick={() => setModalIsOpen(false)} className="btn btn-warn">Cancel</button>
                </div>
            </div>
        </form>
    )
}

// NewTaskForm.propTypes = {

// }

export default NewTaskForm

