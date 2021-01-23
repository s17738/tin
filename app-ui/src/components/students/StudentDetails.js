import React from "react";
import {getUserById} from '../../api/usersApi'
import {Link, useParams} from "react-router-dom";

function StudentDetails() {
    let {studentId} = useParams()
    const student = getUserById(studentId)
    return (
        <section id="students" className="three">
            <div className="container">
                <header>
                    <h2>{student.firstName} {student.lastName}</h2>
                </header>
                <p>ID: {student.id}</p>
                <p>E-mail: {student.email}</p>
                <p>Rola: {student.role.name}</p>
                <Link to={`/students`} className="button">Lista studentów</Link>
            </div>
        </section>
    );
}

export default StudentDetails