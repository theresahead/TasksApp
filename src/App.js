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

  function editRow(task){
    setEditing(true);
    setCurrentTask({id: task.id, task: task.task, priority: task.priority});
  }

  const addTask = task => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const updateTask = ({id, updatedTask}) => {
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
