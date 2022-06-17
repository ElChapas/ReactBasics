import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/taskCreator";
import TasksList from "./components/TasksList";

function App() {
    const [tasksItems, setTasksItems] = useState([]);

    const createNewTask = (newTaskName) => {
        // console.log("Saved. Task: ", newTaskName);
        if (!tasksItems.find((task) => task.name === newTaskName)) {
            setTasksItems([...tasksItems, { name: newTaskName, done: false }]);
            console.log("Tasks: ", tasksItems);
        }
    };

    useEffect(() => {
        const tasks = localStorage.getItem("tasks");
        if (tasks) {
            setTasksItems(JSON.parse(tasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksItems));
    }, [tasksItems]);

    return (
        <div className="App">
            <TaskCreator createNewTask={createNewTask} />
            <TasksList tasksItems={tasksItems} />
        </div>
    );
}

export default App;
