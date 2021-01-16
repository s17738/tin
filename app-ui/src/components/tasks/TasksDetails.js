import React from "react";
import {getTaskByIdApiCall} from '../../api/tasksApi'
import {getFormattedDate} from '../../helpers/dateHelper'
import {useParams} from "react-router-dom";

function TasksDetails() {
    let { taskId } = useParams()
    const task = getTaskByIdApiCall(taskId)
    return (
        <section id="tasks" className="two">
            <div className="container">
                <header>
                    <h2>{task.name}</h2>
                </header>
                <p>Opis: {task.description}</p>
                <p>Data startu: {getFormattedDate(task.startDate)} Data zakończenia: {getFormattedDate(task.endDate)}</p>
            </div>
        </section>
    );
}

export default TasksDetails