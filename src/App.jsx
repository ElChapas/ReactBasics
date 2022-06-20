import { useState, useEffect } from "react";
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

    const clearTasksCompleted = () => {
        setTasksItems(tasksItems.filter((t) => t.done === false));
        setShowCompleted(false);
    };

    return (
        <main className="bg-dark vh-100 text-white">
            <div className="container col-md-4 offset-md-4">
                <TaskCreator createNewTask={createNewTask} />
                <TasksList tasksItems={tasksItems} toggleTask={toggleTask} isChecked={false} />
                <div className="d-flex align-items-center form-check form-switch ">
                    <input role="switch" className="form-check-input" id="show-completed" type="checkbox" checked={showCompleted} onChange={(e) => setShowCompleted(!showCompleted)} />
                    <label className="m-1 flex-fill" htmlFor="show-completed">Show Completed Tasks</label>
                    <button className="btn btn-danger flex-fill" onClick={clearTasksCompleted}>Clear</button>
                </div>
                {showCompleted && <TasksList tasksItems={tasksItems} toggleTask={toggleTask} isChecked={true} />}
            </div>
        </main>
    );
}

export default App;
