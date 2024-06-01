import React, { useState } from 'react'
import { FaTasks } from 'react-icons/fa'
import TaskInput from './components/TaskInput'
import TodoItems from './components/TodoItems'

const App = () => {
  const [todolist, setTodoList] = useState([])
  const addTask = ( taskName) => {
    const newTask = {taskName, checked: false}
    setTodoList([...todolist, newTask])
  }

  const deleteTask = (deleteTaskName) => {
   if (confirm('Are you sure?')) {
    setTodoList(todolist.filter(task => task.taskName !== deleteTaskName))
   }
  }

  const toggleCheck = (taskName) => {
    setTodoList(prevTodoList => prevTodoList.map(task => task.taskName === taskName ? {...task, checked: !task.checked} : task))
  }

 
  return (
    <div className='container'>
      <h3><FaTasks/> Task List</h3>
      <p>A Simple React Task List App
        <hr  className='hr'/>
      </p>

      <div className='count-wrapper'> 
          You have <span className="count">
          {todolist.length}
        </span> tasks on your lists.
      </div>

      <TaskInput addTask={addTask}/>

      <div className="todolist">
        <span className='todo'>TASKS:</span>
        <ul className='list-item'>{todolist.map((task,key) =>
         <TodoItems
         key={key}
         task={task}
         deleteTask={deleteTask}
         toggleCheck={toggleCheck}
        />)}</ul>
      </div>

      <div className="notify">
        {todolist.length === 0 ? 'You are done!' : null}
      </div>

    </div>
  )
}

export default App
