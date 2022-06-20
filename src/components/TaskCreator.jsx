import { useState } from "react";
import React from "react";

const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        setNewTaskName("");
    };

    return (
        <form action="" onSubmit={handleSubmit} className="my-2 row">
            <div className="col-9">
                <input
                    className="form-control"
                    type="text"
                    value={newTaskName}
                    placeholder="Enter new task"
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
            </div>
            <div className="col-3 p-0 d-flex align-items-center">
                <button className="btn btn-primary">Save task</button>
            </div>
        </form>
    );
};

export default TaskCreator;
