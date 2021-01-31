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
            <p><b>Opis:</b> {task.description}</p>
            <p><b>Data startu zadania:</b> {getFormattedDate(task.startDate)}</p>
            <p><b>Data zakończenia zadania:</b> {getFormattedDate(task.endDate)}</p>
            <Link to={`/tasks`} className="button">Lista zadań</Link>
        </React.Fragment>
    )
}

export default TaskDetailsData