import React from "react"
import {Link, Redirect} from "react-router-dom"
import {addSolution, getSolutionByTaskId, updateSolution} from "../../api/tasksApi";

class SolutionForm extends React.Component {
    constructor(props) {
        super(props)
        let {taskId} = props.match.params
        let {solutionId} = props.match.params
        this.state = {
            error: null,
            isSaved: false,
            taskId: taskId,
            solutionId: solutionId,
            newSolutionId: null,
            redirect: null,
            answer: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.solutionId) {
            this.fetchDetails()
        }
    }

    fetchDetails = () => {
        getSolutionByTaskId(this.state.taskId)
            .then(res => res.json())
            .then((data) => {
                    if (!data.message) {
                        this.setState({
                            answer: data.answer,
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

    handleSubmit(event) {
        event.preventDefault();
        let solution = {
            answer: this.state.answer
        }
        if (this.state.solutionId) {
            this.update(solution)
        } else {
            this.save(solution)
        }
    }

    update(solution) {
        updateSolution(this.state.taskId, this.state.solutionId, solution)
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        isSaved: true,
                        redirect: "/tasks/details/" + this.state.taskId
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

    save(solution) {
        addSolution(this.state.taskId, solution)
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        isSaved: true,
                        newSolutionId: data.id,
                        redirect: "/tasks/details/" + this.state.taskId
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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {redirect, taskId} = this.state
        if (redirect) {
            return <Redirect to={redirect}/>
        }
        return (
            <section id="solutions" className="two">
                <div className="container">
                    <h2>Rozwiązanie zadania</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="answer">Odpowiedź:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <textarea onChange={this.handleChange} name="answer" id="answer"
                                  value={this.state.answer} required/>
                        <span id="errorDescription" className="errors-text"></span>

                        <div className="form-buttons">
                            <p id="errorsSummary" className="errors-text"></p>
                            <input className="button" type="submit" value="Zapisz"/>
                            <Link to={`/tasks/details/${taskId}`} className="button red">Anuluj</Link>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default SolutionForm