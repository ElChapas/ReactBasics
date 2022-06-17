import { useState } from "react";

import React from "react";

const TaskCreator = () => {
    const [newTaskName, setNewTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Saved. Task: ", newTaskName);
        localStorage.setItem("task", newTaskName);
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
