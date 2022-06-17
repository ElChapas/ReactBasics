import React from "react";

const TasksList = (props) => {
    const handleToggle = (task) => {
        props.toggleTask(task);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasksItems.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{<input type="checkbox" defaultChecked={task.done} onChange={() => handleToggle(task)}></input>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TasksList;
