import React, {useState} from 'react'
// import PropTypes from 'prop-types'


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
                            // id="priority" 
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
        // <form 
        //     onSubmit={ e => {
        //         e.preventDefault();
        //         priorityIndex(task);
        //         updateTask(task.id, task);
        //     }} 
        //     className="row">
        //     <div className="col-5">
        //     <input 
        //         onChange={handleInputChange}
        //         value={task.task} 
        //         name="task" 
        //         className="form-control" 
        //         type="text"/>
        //     </div>
        //     <div className="col-3">
        //         <select 
        //             value={task.priority}
        //             onChange={handleInputChange}
        //             className="form-control" 
        //             // id="priority" 
        //             name="priority">
        //             <option>Select Priority</option>
        //             <option value="high">High</option>
        //             <option value="medium">Medium</option>
        //             <option value="low">Low</option>
        //         </select>
        //     </div>
        //     <div className="col-2">
        //         <button className="btn btn-success">Save</button>
        //     </div>
        //     <div className="col-2">
        //         <button onClick={() => setEditing(false)} className="btn btn-primary">Cancel</button>
        //     </div>
        // </form>
    )
}

// EditTaskForm.propTypes = {

// }

export default EditTaskForm

