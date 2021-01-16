import React from "react";
import {getTasksListApiCall} from '../../api/tasksApi'
import {Link} from "react-router-dom";
import { getFormattedDate } from '../../helpers/dateHelper'

function TasksList() {
    const tasksList = getTasksListApiCall()
    return (
        <section id="tasks" className="two">
            <div className="container">
                <header>
                    <h2>Zadania</h2>
                </header>
                <table>
                    <tbody>
                    <tr>
                        <th>Nazwa</th>
                        <th>Data startu</th>
                        <th>Data zakończenia</th>
                        <th>Akcja</th>
                    </tr>
                    {tasksList.map(t => (
                        <tr key={t.id}>
                            <td>{t.name}</td>
                            <td>{getFormattedDate(t.startDate)}</td>
                            <td>{getFormattedDate(t.endDate)}</td>
                            <td>
                                <Link to={`tasks/details/${t.id}`} className="button">Szczegóły</Link>
                                <Link to={`tasks/edit/${t.id}`} className="button">Edytuj</Link>
                                <Link to={`tasks/delete/${t.id}`} className="button red">Usuń</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TasksList