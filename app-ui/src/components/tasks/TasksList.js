import React from "react";
import {getTasksList} from '../../api/tasksApi'
import {Link} from "react-router-dom";
import TasksListTable from "./TasksListTable";

class TasksList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            tasks: [],
        }
    }

    fetchList = () => {
        getTasksList()
            .then(res => res.json())
            .then((data) => {
                    this.setState({
                        isLoaded: true,
                        tasks: data
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

    render() {
        const {error, isLoaded, tasks} = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Ładowanie danych...</p>
        } else {
            content = <TasksListTable tasksList={tasks}/>
        }
        return (
            <section id="tasks" className="two">
                <div className="container">
                    <header>
                        <h2>Zadania</h2>
                    </header>
                    {content}
                    <Link to={`tasks/new-task`} className="button">Dodaj zadanie</Link>
                </div>
            </section>
        );
    }
}

export default TasksList