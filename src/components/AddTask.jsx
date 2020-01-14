import React from 'react'

function AddTask({onButtonClick}) {
    return (
        <section className="container">
            <div className="row">
                <div className="col">
                    <button onClick={onButtonClick} className="btn btn-success">Add Task</button>
                </div>
            </div>
        </section>
    )
}

export default AddTask

