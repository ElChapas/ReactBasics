import { useState } from "react";
import "./App.css";
import TaskCreator from "./components/taskCreator";
import TasksList from "./components/TasksList";

function App() {

    const [tasksItems, setTasksItems] = useState([
        { name: "mi primer tarea", done: false },
        { name: "mi segunda tarea", done: false },
    ]);

    const createNewTask = (newTaskName) => {
        // console.log("Saved. Task: ", newTaskName);
        setTasksItems([...tasksItems, { name: newTaskName, done: false }]);
        console.log("Tasks: ", tasksItems);
    }

    return (
        <div className="App">
            <TaskCreator createNewTask={createNewTask}/>
            <TasksList tasksItems={tasksItems} />
        </div>
    );
}

export default App;
