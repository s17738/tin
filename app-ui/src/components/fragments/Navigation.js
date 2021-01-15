import React from "react";
import {Link} from 'react-router-dom'


function Navigation() {
    return (
        <nav id="nav">
            <ul>
                <li><Link to="/" id="start-link">Start</Link></li>
                <li><Link to="/tasks" id="tasks-link">Zadania</Link></li>
                <li><Link to="/students" id="students-link">Studenci</Link></li>
                <li><Link to="/solutions" id="solutions-link">Rozwiązania</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation