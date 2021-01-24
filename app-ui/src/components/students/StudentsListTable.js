import React from 'react';
import {Link} from "react-router-dom";

function StudentsListTable(props) {
    const students = props.studentsList
    return (
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>E-mail</th>
            </tr>
            {students.map(u => (
                <tr key={u.id}>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.email}</td>
                    <td>
                        <Link to={`students/details/${u.id}`} className="button">Szczegóły</Link>
                        <Link to={`students/edit/${u.id}`} className="button">Edytuj</Link>
                        <Link to={`students/delete/${u.id}`} className="button red">Usuń</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default StudentsListTable