import React, {useState} from 'react';
import DisplayTasks from './components/DisplayTasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Modal from './components/Modal';
import './assets/sass/index.scss';


function App() {
  const tasksData = [];
  // Modal
  const [isModalOpen, setModalIsOpen] = useState(false);
  // Tasks = tasksData, setTasks = sets new tasks to the array
  const [tasks, setTasks] = useState(tasksData);
  // Editing state hook
  const [editing, setEditing] = useState(false);
  // Initial edit form state
  const initialFormState = {id: null, task: "", priority: ""};
  // currentTask = task thats being edited
  const [currentTask, setCurrentTask] = useState(initialFormState);
  //  Add task object to array
  const addTask = taskItem => {
    taskItem.id = tasks.length + 1;
    setTasks([...tasks, taskItem]);
  }
  // Delete 
   const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  // Edit 
  function editRow(task){
    setEditing(true);
    setCurrentTask({id: task.id, task: task.task, priority: task.priority});
  }
  // Update
  const updateTask = (id, updatedTask) => {
    console.log(updatedTask)
    setEditing(false);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)))
  }

  return (
    <>
      <Header></Header>
      <DisplayTasks 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editRow={editRow}
        editing={editing}
        setEditing={setEditing}
        currentTask={currentTask}
        updateTask={updateTask}
        >
      </DisplayTasks>
      <AddTask onButtonClick={() => setModalIsOpen(true)}></AddTask>
      {isModalOpen && (
        <Modal addTask={addTask} setModalIsOpen={setModalIsOpen}></Modal>
      )} 
    </>
  )
}

export default App;
