import React, {useState} from 'react';
import DisplayTasks from './components/DisplayTasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Modal from './components/Modal';
import './assets/sass/index.scss';


function App() {
  // Store data in 
  const tasksData = [];
  // Modal
  const [isModalOpen, setModalIsOpen] = useState(false);
  // Tasks = tasksData, setTasks = sets new tasks to the array
  const [tasks, setTasks] = useState(tasksData);
  // Editing state hook
  const [editing, setEditing] = useState(false);
  // Initial edit form state
  const initialFormState = {id: null, task: "", priority: "", priorityIndex: null};
  // currentTask = task thats being edited
  const [currentTask, setCurrentTask] = useState(initialFormState);
  //  Add task object to array
  const addTask = taskItem => {
    priorityIndex(taskItem);
    taskItem.id = tasks.length + 1;
    setTasks([...tasks, taskItem]);
    console.log(taskItem.priorityIndex);
  }
  // Delete 
   const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  // Edit 
  function editRow(task){
    setEditing(true);
    setModalIsOpen(true)
    priorityIndex(task);
    setCurrentTask({id: task.id, task: task.task, priority: task.priority, priorityIndex: task.priorityIndex});
    console.log(task.priorityIndex)
  }
  // Update
  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)))
  }

  // Set task.priority to task.priorityIndex to allow sorting
  const priorityIndex = taskItem => {
    taskItem.priorityIndex = null;
    switch(taskItem.priority){
      case "high":
        taskItem.priorityIndex = 1;
        break;
      case "medium":
        taskItem.priorityIndex = 2;
        break;
      default:
        taskItem.priorityIndex = 3;
    }
  }

  // When new task is created check priority value through switch function
  // push priorityIndex and value to object depending on priority

  return (
    <>
      <Header></Header>
      {/* Filter tasks by importance */}
      <DisplayTasks 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editRow={editRow}
        editing={editing}
        setEditing={setEditing}
        currentTask={currentTask}
        updateTask={updateTask}
        priorityIndex={priorityIndex}
        >
      </DisplayTasks>
      <AddTask onButtonClick={() => setModalIsOpen(true)}></AddTask>
      {isModalOpen && (
        <Modal addTask={addTask} setModalIsOpen={setModalIsOpen} editing={editing}></Modal>
      )} 
    </>
  )
}

export default App;
