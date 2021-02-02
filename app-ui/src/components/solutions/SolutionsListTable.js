import React from 'react';
import {getFormattedDate} from "../../helpers/dateHelper";

function SolutionsListTable(props) {
    const solutions = props.solutionsList
    return (
        <table>
            <tbody>
            <tr>
                <th>Odpowiedź</th>
                <th>Data rozwiązania</th>
                <th>Wynik</th>
            </tr>
            {solutions.map(t => (
                <tr key={t.id}>
                    <td>{t.answer}</td>
                    <td>{getFormattedDate(t.solvedDate)}</td>
                    <td>{t.score}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default SolutionsListTable