import React from "react";

const TasksList = (props) => {
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
                            <td>{task.done ? "Done" : "Not done"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TasksList;
