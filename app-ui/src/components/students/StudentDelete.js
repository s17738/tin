import React from "react";
import {deleteUserById} from '../../api/usersApi'
import {Link, Redirect} from "react-router-dom";


class StudentDelete extends React.Component {
    constructor(props) {
        super(props)
        let {studentId} = props.match.params
        this.state = {
            studentId: studentId,
            redirect: null,
            error: null
        }
    }

    componentDidMount() {
        this.handleDelete()
    }

    handleDelete = () => {
        deleteUserById(this.state.studentId)
            .then((res) => {
                    if (!res.ok) {
                        return res.json();
                    }
                }
            )
            .then((data) => {
                    if (data) {
                        this.setState({error: data});
                    } else {
                        this.setState({redirect: "/students"});
                    }
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    render() {
        const {error, redirect} = this.state
        let content;

        if (error) {
            content = <p>Błąd, nie można usunąć studenta: {error.message}</p>
        } else if (redirect) {
            content = <Redirect to={redirect}/>
        } else {
            content = <p>Loading...</p>
        }
        return (
            <section id="students" className="three">
                <div className="container">
                    <header>
                        <h2>Studenci</h2>
                    </header>
                    {content}
                    <Link to={`/students`} className="button">Lista studentów</Link>
                </div>
            </section>
        );
    }
}

export default StudentDelete