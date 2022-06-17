import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/taskCreator";
import TasksList from "./components/TasksList";

function App() {
    const [tasksItems, setTasksItems] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    const createNewTask = (newTaskName) => {
        // console.log("Saved. Task: ", newTaskName);
        if (!tasksItems.find((task) => task.name === newTaskName)) {
            setTasksItems([...tasksItems, { name: newTaskName, done: false }]);
            // console.log("Tasks: ", tasksItems);
        }
    };

    const toggleTask = (task) => {
        setTasksItems(tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)));
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
            <TasksList tasksItems={tasksItems} toggleTask={toggleTask} isChecked={false} />
            <input id="show-completed" type="checkbox" onChange={(e) => setShowCompleted(!showCompleted)}/>
            <label htmlFor="show-completed">Show Completed Tasks</label>
            {showCompleted && (
                <TasksList tasksItems={tasksItems} toggleTask={toggleTask} isChecked={true} />
            )}
        </div>
    );
}

export default App;
