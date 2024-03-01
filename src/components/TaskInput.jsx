import React, { useState } from "react";

const TaskInput = ({addTask}) => {

    const [task,setTask] = useState('')

    function hendleInputValue(event){
        setTask(event.target.value)
    }

    function hendleAddTask(event){
        event.preventDefault()
        if(task.trim() === '') return;
        addTask(task)
        setTask('')
    }
    return <div>
        <form className="inputField" onSubmit={hendleAddTask}>
            <input
             type="text"
              placeholder="add"
              value={task}
              onChange={hendleInputValue}
              />
            <button>+</button>
        </form>
    </div>
}

export default TaskInput;