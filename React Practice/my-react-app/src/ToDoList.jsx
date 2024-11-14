import React, { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState(["Walk the dog", "Take a shower"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }   

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }
        
    }

    function deleteTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index);
        setTasks(updatedTask);
    }

    function moveUp(index){
        if(index > 0){
            const updatedTask =[...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTask =[...tasks];
            [updatedTask[index + 1], updatedTask[index]] =
            [updatedTask[index], updatedTask[index + 1]]
            setTasks(updatedTask);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="input-items">
                <input 
                    type="text"
                    placeholder="Enter your task" 
                    value={newTask} 
                    onChange={handleInputChange}/>
            <button onClick={addTask} className="add-button">Add</button>
            </div>
                <div className="list">
                    <ol>
                        {tasks.map((task, index)=>
                            <li key={index}>
                                <span className="list-text">{task}</span> 
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="moveUp-button" onClick={() => moveUp(index)}>⬆</button>
                                <button className="moveDown-button" onClick={() => moveDown(index)}>⬇</button>
                            </li>)}
                    </ol>
                </div>
        </div>
    );
}

export default ToDoList