import React from 'react';
import {getFormattedDate} from "../../helpers/dateHelper";
import {Link} from "react-router-dom";

function SolutionsListTable(props) {
    const solutions = props.solutionsList
    const taskId = props.taskId
    return (
        <table>
            <tbody>
            <tr>
                <th>Odpowiedź</th>
                <th>Data rozwiązania</th>
                <th>Wynik</th>
                <th>Akcja</th>
            </tr>
            {solutions.map(t => (
                <tr key={t.id}>
                    <td>{t.answer}</td>
                    <td>{getFormattedDate(t.solvedDate)}</td>
                    <td>{t.score}</td>
                    <td><Link to={`/tasks/details/${taskId}/delete-solution/${t.id}`}
                              className={t.score ? 'button red disabled-link' : 'button red'}>Usuń</Link></td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default SolutionsListTable