import React from "react";
import {getTaskByIdApiCall} from '../../api/tasksApi'
import {getFormattedDate} from '../../helpers/dateHelper'
import {Link, useParams} from "react-router-dom";

function TasksDetails() {
    let {taskId} = useParams()
    const task = getTaskByIdApiCall(taskId)
    return (
        <section id="tasks" className="two">
            <div className="container">
                <header>
                    <h2>{task.name}</h2>
                </header>
                <p>Opis: {task.description}</p>
                <p>Data startu zadania: {getFormattedDate(task.startDate)} Data zakończenia zadania: {getFormattedDate(task.endDate)}</p>
                <Link to={`/tasks`} className="button">Lista zadań</Link>
                <Link to={`/tasks/${taskId}/new-solution`} className="button">Rozwiąż zadanie</Link>
            </div>
        </section>
    );
}

export default TasksDetails