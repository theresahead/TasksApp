import React, {useState} from 'react';
import DisplayTasks from './components/DisplayTasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Modal from './components/Modal';
import './assets/sass/index.scss';
// import './App.css';



function App() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const tasksData = [
    {id: 1, task: "task 1", priority: "urgent"},
    {id: 2, task: "task 2", priority: "medium"},
    {id: 3, task: "task 3", priority: "low"},
  ];
  const initialFormState = {id: null, task: "", priority: ""};
  const [tasks, setTasks] = useState(tasksData);
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialFormState);

  function editRow(taskItem){
    setEditing(true);
    setCurrentTask({id: taskItem.id, task: taskItem.task, priority: taskItem.priority});
  }

  const addTask = taskItem => {
    taskItem.id = tasks.length + 1;
    setTasks([...tasks, taskItem]);
  };
  const deleteTask = id => {
    setTasks(tasks.filter(taskItem => taskItem.id !== id));
  }
  const updateTask = ({id, updatedTask}) => {
    setEditing(false);
    setTasks(tasks.map(taskItem => (taskItem.id === id ? updatedTask : taskItem)))
  }
  return (
    <>
      <Header></Header>
      <DisplayTasks 
        tasks={tasks} 
        deleteTask={deleteTask} 
        editRow={editRow}
        editing={editing}
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
