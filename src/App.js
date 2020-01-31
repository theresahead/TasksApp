import React, {useState, useEffect} from 'react';
import DisplayTasks from './components/DisplayTasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Modal from './components/Modal';
import './assets/sass/index.scss';


function App() {
  const initialData = () => JSON.parse(sessionStorage.getItem('tasks')) || [];
  // Tasks = tasks, setTasks = sets new tasks object to the array
  const [tasks, setTasks] = useState(initialData);
  // Modal
  const [isModalOpen, setModalIsOpen] = useState(false);
  // Editing state hook
  const [editing, setEditing] = useState(false);
  // Initial edit form state
  const initialFormState = {id: null, task: "", priority: "", priorityIndex: null};
  // currentTask = task thats being edited
  const [currentTask, setCurrentTask] = useState(initialFormState);
  // Toggle sort of sort button
  const [sort, toggleSort] = useState(false);
  //  Add task object to array
  const addTask = taskItem => {
    priorityIndex(taskItem);
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
    setModalIsOpen(true)
    priorityIndex(task);
    setCurrentTask({id: task.id, task: task.task, priority: task.priority, priorityIndex: task.priorityIndex});
  }
  // Update
  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setModalIsOpen(false);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)))
  }

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
  const toggleSorting = () => {
    toggleSort(!sort);
    if(sort){
      sortByHighPriority();
    } else {
      sortByLowPriority();
    }
  }

  const sortByHighPriority = () => {
    const sortedHigh = tasks.sort((a, b) => {
      return a.priorityIndex - b.priorityIndex;
    });
    setTasks(sortedHigh);
  }

  const sortByLowPriority = () => {
    const sortedLow = tasks.sort((a, b) => {
      return b.priorityIndex - a.priorityIndex;
    });
    setTasks(sortedLow);
  }

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])
  

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
        priorityIndex={priorityIndex}
        toggleSorting={toggleSorting}
        >
      </DisplayTasks>
      <AddTask onButtonClick={() => setModalIsOpen(true)}></AddTask>
      {isModalOpen && (
        <Modal addTask={addTask} setModalIsOpen={setModalIsOpen} editing={editing} setEditing={setEditing} currentTask={currentTask} updateTask={updateTask} priorityIndex={priorityIndex}></Modal>
      )} 
    </>
  )
}

export default App;
