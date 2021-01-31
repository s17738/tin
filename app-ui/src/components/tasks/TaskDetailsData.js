import React from 'react';
import {Link} from "react-router-dom";
import {getFormattedDate} from "../../helpers/dateHelper";

function TaskDetailsData(props) {
    const task = props.taskData
    return (
        <React.Fragment>
            <header>
                <h2>{task.name}</h2>
            </header>
            <p>Opis: {task.description}</p>
            <p>Data startu zadania: {getFormattedDate(task.startDate)} Data zakończenia
                zadania: {getFormattedDate(task.endDate)}</p>
            <Link to={`/tasks`} className="button">Lista zadań</Link>
            <Link to={`/tasks/${task.id}/new-solution`} className="button">Rozwiąż zadanie</Link>
        </React.Fragment>
    )
}

export default TaskDetailsData