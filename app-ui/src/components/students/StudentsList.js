import React from "react";
import {Link} from "react-router-dom";
import {getUsersList, deleteUserById} from "../../api/usersApi";
import StudentsListTable from "./StudentsListTable";

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
        const {error, isLoaded, students} = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Ładowanie danych...</p>
        } else {
            content = <StudentsListTable studentsList={students}/>
        }
        return (
            <section id="students" className="three">
                <div className="container">
                    <header>
                        <h2>Studenci</h2>
                    </header>
                    {content}
                    <Link to={`students/new-student`} className="button">Dodaj studenta</Link>
                </div>
            </section>
        )
    }
}

export default StudentsList