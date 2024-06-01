import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
const TodoItems = ({task, deleteTask, toggleCheck}) => {
  return (
    <li>
        <div className="checked">
            <input type="checkbox" checked={task.checked}  onChange={() => toggleCheck(task.taskName)}/>
        </div>
        <div className="taskname">
            <p className={task.checked ? 'isChecked' : null}>{task.taskName}</p>
        </div>
        <MdDeleteSweep
            className="delete"
            onClick={() => deleteTask(task.taskName)}
        />
    </li>
  )
}

export default TodoItems