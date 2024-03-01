import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

function App() {

  const [toDoList,setToDoList] = useState([])

  const addTask =(taskName)=>{
    const newTask = {taskName, checked: false};
    setToDoList([...toDoList, newTask])
  }

  function deleteTask(deletTaskName){
    setToDoList(toDoList.filter(task => task.taskName !== deletTaskName))
  }

  function toggleCheck(taskName){
    setToDoList((prevToDoList) => prevToDoList.map(task =>task.taskName === taskName ? {...task, checked: !task.checked}: task))
  }


  return (
    <>
    <div className="container">
      <h1>React</h1>
      <TaskInput addTask={addTask}/>

      <div className="toDoList">
        <span>To do</span>
        <ul className="list-item">
          
          {toDoList.map((task,key )=> (
            <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck}/>
          ))}
        </ul>
        {toDoList.length === 0?(<p className="notify">you are done?</p>) :null}
      </div>
    </div>
    </>
  );
}

export default App;
