import React, {useState} from 'react'
// import Task from './Task'
// import PropTypes from 'prop-types'
// import AddTask from './AddTask'



function NewTaskForm({addTask, setModalIsOpen}) {
    const initialState = {id: null, task: "", priority: ""};
    const [task, setTask] = useState(initialState);
    // const [isModalOpen, setModalIsOpen] = useState(true);

    const handleInputChange = e => {
        console.log(e);
        const {name, value} = e.target;
        setTask({...task, [name]: value})
    }
    // const submitHandler = e => {
    //     e.preventDefault();
    //     if(!tasks.task || !tasks.priority) return;
    //     addTask(tasks);
    //     setTasks(initialState);
    // }
    return (
        <form className="container" onSubmit={e => {
            e.preventDefault();
            addTask(task);
            setTask(initialState);
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
                            id="task" 
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
                            id="priority" 
                            name="priority">
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
                </div>
            </div>
        </form>
    )
}

// NewTaskForm.propTypes = {

// }

export default NewTaskForm

