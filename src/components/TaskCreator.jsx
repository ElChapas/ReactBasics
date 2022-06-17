import { useState } from "react";
import React from "react";

const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("task", newTaskName);
        createNewTask(newTaskName);
        setNewTaskName("");
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={newTaskName} placeholder="Enter new task" onChange={(e) => setNewTaskName(e.target.value)} />
            <button>Save task</button>
        </form>
    );
};

export default TaskCreator;
