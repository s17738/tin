import React from 'react';
import {Link} from "react-router-dom";

function StudentDetailsData(props) {
    const student = props.studentData
    return (
        <React.Fragment>
            <header>
                <h2>{student.firstName} {student.lastName}</h2>
            </header>
            <p><b>ID:</b> {student.id}</p>
            <p><b>E-mail:</b> {student.email}</p>
            <p><b>Rola:</b> {student.role.name}</p>
            <Link to={`/students`} className="button">Lista studentów</Link>
        </React.Fragment>
    )
}

export default StudentDetailsData