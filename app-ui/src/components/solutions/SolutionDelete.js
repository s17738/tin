import React from "react";
import {Link, Redirect} from "react-router-dom";
import {deleteSolutionById} from "../../api/tasksApi";


class SolutionDelete extends React.Component {
    constructor(props) {
        super(props)
        let {taskId} = props.match.params
        let {solutionId} = props.match.params
        this.state = {
            taskId: taskId,
            solutionId: solutionId,
            redirect: null,
            error: null
        }
    }

    componentDidMount() {
        this.handleDelete()
    }

    handleDelete = () => {
        deleteSolutionById(this.state.taskId, this.state.solutionId)
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
                        this.setState({redirect: `/tasks/details/${this.state.taskId}`});
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
            content = <p>Błąd, nie można usunąć rozwiązania: {error.message}</p>
        } else if (redirect) {
            content = <Redirect to={redirect}/>
        } else {
            content = <p>Loading...</p>
        }
        return (
            <section id="solutions" className="two">
                <div className="container">
                    <header>
                        <h2>Zadania</h2>
                    </header>
                    {content}
                    <Link to={`/tasks/details/${this.state.taskId}`} className="button">Powrót do zadania</Link>
                </div>
            </section>
        );
    }
}

export default SolutionDelete