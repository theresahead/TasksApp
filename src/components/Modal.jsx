import React, {useEffect, useState} from 'react'
import { createPortal } from 'react-dom';
import NewTaskForm from './NewTaskForm';
import EditTaskForm from './EditTaskForm';

function Portal({ children }) {
    const modalRoot = document.getElementById('modal-root') 
    const [element] = useState(document.createElement('div')) 
  
    useEffect(() => {
      modalRoot.appendChild(element)
      // cleanup method to remove the appended child
      return function cleanup() {
        modalRoot.removeChild(element)
      }
    }, [modalRoot, element])
  
    return createPortal(children, element)
  }
function Modal({
  addTask, 
  setModalIsOpen,
  editing,
  setEditing,
  currentTask,
  updateTask,
  priorityIndex,
  }) {
  return (
    editing ? (
      <Portal>
          <div className="modal-wrapper">
            <EditTaskForm 
              setEditing={setEditing} 
              currentTask={currentTask} 
              updateTask={updateTask} 
              addTask={addTask} 
              setModalIsOpen={setModalIsOpen} 
              priorityIndex={priorityIndex}>
            </EditTaskForm>
          </div>
      </Portal>
    ) : (
      <Portal>
          <div className="modal-wrapper">
              <NewTaskForm addTask={addTask} setModalIsOpen={setModalIsOpen}></NewTaskForm>
          </div>
      </Portal>
    )
  )
}

export default Modal
