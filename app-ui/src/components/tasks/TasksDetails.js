import React from "react";
import {getTaskById} from '../../api/tasksApi'
import TaskDetailsData from "./TaskDetailsData";
import SolutionsList from "../solutions/SolutionsList";

class TasksDetails extends React.Component {
    constructor(props) {
        super(props)
        let {taskId} = props.match.params
        this.state = {
            taskId: taskId,
            task: null,
            error: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        this.fetchDetails()
    }

    fetchDetails = () => {
        getTaskById(this.state.taskId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            task: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            task: data,
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
        const {task, taskId, error, isLoaded, message} = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Pobieranie danych...</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <TaskDetailsData taskData={task}/>
        }
        return (
            <div>
                <section id="tasks" className="two">
                    <div className="container">
                        {content}
                    </div>
                </section>
                <SolutionsList taskId={taskId}/>
            </div>
        );
    }
}

export default TasksDetails