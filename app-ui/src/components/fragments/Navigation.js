import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><a href="#start" id="start-link">Start</a></li>
                    <li><a href="#tasks" id="tasks-link">Zadania</a></li>
                    <li><a href="#students" id="students-link">Studenci</a></li>
                    <li><a href="#solutions" id="solutions-link">Rozwiązania</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation