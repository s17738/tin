import React from "react";
import {getUsersListApiCall} from '../../api/usersApi'
import {Link} from "react-router-dom";

function StudentsList() {
    const usersList = getUsersListApiCall()
    return (
        <section id="students" className="three">
            <div className="container">
                <header>
                    <h2>Studenci</h2>
                </header>
                <table>
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>E-mail</th>
                    </tr>
                    {usersList.map(u => (
                        <tr key={u.id}>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>
                                <Link to={`users/details/${u.id}`} className="button">Szczegóły</Link>
                                <Link to={`users/edit/${u.id}`} className="button">Edytuj</Link>
                                <Link to={`users/delete/${u.id}`} className="button red">Usuń</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default StudentsList