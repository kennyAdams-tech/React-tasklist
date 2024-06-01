import React, { useState } from 'react'

const TaskInput = ({ addTask }) => {
    const [task , setTask] = useState('')

    const HandleTaskValue = (e) => {
        setTask(e.target.value)
    }

    const HandleAddTask = () => {
        if (task.trim() === '') return ;
        addTask(task)
        setTask('')
    }


  return (
    <div className='inputfield'>
        <input type="text" placeholder='Add Tasks...' value={task} onChange={HandleTaskValue}/>
        <button onClick={() => HandleAddTask()}>+</button>
    </div>
  )
}

export default TaskInput