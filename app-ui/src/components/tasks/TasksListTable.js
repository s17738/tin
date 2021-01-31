import React from 'react';
import {Link} from "react-router-dom";
import {getFormattedDate} from "../../helpers/dateHelper";

function TasksListTable(props) {
    const tasks = props.tasksList
    return (
        <table>
            <tbody>
            <tr>
                <th>Nazwa</th>
                <th>Data startu</th>
                <th>Data zakończenia</th>
                <th>Akcja</th>
            </tr>
            {tasks.map(t => (
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
    )
}

export default TasksListTable