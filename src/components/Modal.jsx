import React, {useEffect, useState} from 'react'
import { createPortal } from 'react-dom';
import NewTaskForm from './NewTaskForm'
// import PropTypes from 'prop-types'

function Portal({ children }) {
    const modalRoot = document.getElementById('modal-root') // A div with id=modal-root in the index.html
    const [element] = useState(document.createElement('div')) // Create a div element which will be mounted within modal-root
  
    // useEffect bible: https://overreacted.io/a-complete-guide-to-useeffect/
    useEffect(() => {
      modalRoot.appendChild(element)
      // cleanup method to remove the appended child
      return function cleanup() {
        modalRoot.removeChild(element)
      }
    }, [modalRoot, element])
  
    return createPortal(children, element)
  }

function Modal({addTask, setModalIsOpen}) {
    return (
        <Portal>
            <div className="modal-wrapper">
                <NewTaskForm addTask={addTask} setModalIsOpen={setModalIsOpen}></NewTaskForm>
            </div>
        </Portal>
    )
}

export default Modal
