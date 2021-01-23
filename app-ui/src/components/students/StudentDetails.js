import React from "react";
import {getUserById} from '../../api/usersApi'
import StudentDetailsData from "./StudentDetailsData";

class StudentDetails extends React.Component {
    constructor(props) {
        super(props)
        let {studentId} = props.match.params
        this.state = {
            studentId: studentId,
            student: null,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        this.fetchDetails()
    }

    fetchDetails = () => {
        getUserById(this.state.studentId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            student: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            student: data,
                            message: null,
                        })
                    }
                    this.setState({
                        isLoaded: true,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    render() {
        const {student, error, isLoaded, message} = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Pobieranie danych...</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <StudentDetailsData studentData={student}/>
        }
        return (
            <section id="students" className="three">
                <div className="container">
                    {content}
                </div>
            </section>
        );
    }
}

export default StudentDetails