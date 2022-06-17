import React from "react";

const TasksList = ({ tasksItems, isChecked, toggleTask }) => {

    const tableBody = () => {
        return (tasksItems
            .filter((task) => task.done === isChecked)
            .map((task) => (
                <tr key={task.name}>
                    <td>{task.name}</td>
                    <td>{<input type="checkbox" defaultChecked={task.done} onChange={() => toggleTask(task)}></input>}</td>
                </tr>
            )));
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
                <tbody>{tableBody()}</tbody>
            </table>
        </div>
    );
};

export default TasksList;
