import React from "react";
import {Link} from 'react-router-dom'


function Navigation() {
    const [value,] = React.useState(
        localStorage.getItem('userName')
    );

    if (value) {
        return (
            <nav id="nav">
                <ul>
                    <li><Link to="/" id="start-link">Start</Link></li>
                    <li><Link to="/tasks" id="tasks-link">Zadania</Link></li>
                    <li><Link to="/students" id="students-link">Studenci</Link></li>
                    <li><Link to="/logout" id="students-link">Wyloguj</Link></li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav id="nav">
                <ul>
                    <li><Link to="/" id="start-link">Start</Link></li>
                </ul>
            </nav>
        );
    }

}

export default Navigation