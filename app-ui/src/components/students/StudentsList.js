import React from "react";
import {Link} from "react-router-dom";
import {getUsersList, deleteUserById} from "../../api/usersApi";

class StudentsList extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            students: [],
        }
    }

    fetchList = () => {
        getUsersList()
            .then(res => res.json())
            .then((data) => {
                    this.setState({
                        isLoaded: true,
                        students: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchList()
    }

    handleDelete(id) {
        deleteUserById(id)
            .then(res => res.text())
    }

    render() {
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
                        {this.state.students.map(u => (
                            <tr key={u.id}>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.email}</td>
                                <td>
                                    <Link to={`students/details/${u.id}`} className="button">Szczegóły</Link>
                                    <Link to={`students/edit/${u.id}`} className="button">Edytuj</Link>
                                    <Link to={`users/delete/${u.id}`} className="button red">Usuń</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <Link to={`students/new-student`} className="button">Dodaj studenta</Link>
                </div>
            </section>
        )
    }
}

export default StudentsList