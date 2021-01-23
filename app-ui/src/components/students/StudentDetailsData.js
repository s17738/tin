import React from 'react';
import {Link} from "react-router-dom";

function StudentDetailsData(props) {
    const student = props.studentData
    return (
        <React.Fragment>
            <header>
                <h2>{student.firstName} {student.lastName}</h2>
            </header>
            <p>ID: {student.id}</p>
            <p>E-mail: {student.email}</p>
            <p>Rola: {student.role.name}</p>
            <Link to={`/students`} className="button">Lista studentów</Link>
        </React.Fragment>
    )
}

export default StudentDetailsData