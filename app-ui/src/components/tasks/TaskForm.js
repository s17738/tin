import React from "react"
import {Link, Redirect} from "react-router-dom"
import {addTask, getTaskById, updateTask} from "../../api/tasksApi";
import {getDateTimeLocal} from "../../helpers/dateHelper";

class TaskForm extends React.Component {
    constructor(props) {
        super(props)
        let {taskId} = props.match.params
        this.state = {
            error: null,
            isSaved: false,
            taskId: taskId,
            newTaskId: null,
            redirect: null,
            name: '',
            description: '',
            startDate: '',
            endDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.taskId) {
            this.fetchDetails()
        }
    }

    fetchDetails = () => {
        getTaskById(this.state.taskId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (!data.message) {
                        this.setState({
                            name: data.name,
                            description: data.description,
                            startDate: getDateTimeLocal(data.startDate),
                            endDate: getDateTimeLocal(data.endDate),
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
        let task = {
            name: this.state.name,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        if (this.state.taskId) {
            this.update(task)
        } else {
            this.save(task)
        }
    }

    update(task) {
        updateTask(this.state.taskId, task)
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

    save(task) {
        addTask(task)
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        isSaved: true,
                        newTaskId: data.id,
                        redirect: "/tasks/details/" + data.id
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
        const {redirect} = this.state
        if (redirect) {
            return <Redirect to={redirect}/>
        }
        return (
            <section id="tasks" className="two">
                <div className="container">
                    <h2>Zadanie</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Nazwa:<abbr title="required" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="text" name="name" id="name"
                               value={this.state.name}/>
                        <span id="errorName" className="errors-text"></span>

                        <label htmlFor="description">Opis:<abbr title="required" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="text" name="description" id="description"
                               value={this.state.description}/>
                        <span id="errorDescription" className="errors-text"></span>

                        <label htmlFor="startDate">Data startu:<abbr title="required"
                                                                     aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="datetime-local" name="startDate" id="startDate"
                               value={this.state.startDate}/>
                        <span id="errorStartDate" className="errors-text"></span>

                        <label htmlFor="endDate">Data zakończenia:<abbr title="required" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="datetime-local" name="endDate" id="endDate"
                               value={this.state.endDate}/>
                        <span id="errorEndDate" className="errors-text"></span>

                        <div className="form-buttons">
                            <p id="errorsSummary" className="errors-text"></p>
                            <input className="button" type="submit" value="Zapisz"/>
                            <Link to="/tasks" className="button red">Anuluj</Link>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default TaskForm