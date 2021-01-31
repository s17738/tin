import React from "react"
import {Link, Redirect} from "react-router-dom"
import {addUser, getUserById, updateUser} from "../../api/usersApi";

class StudentForm extends React.Component {
    constructor(props) {
        super(props)
        let {studentId} = props.match.params
        this.state = {
            error: null,
            isSaved: false,
            studentId: studentId,
            newStudentId: null,
            redirect: null,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.studentId) {
            this.fetchDetails()
        }
    }

    fetchDetails = () => {
        getUserById(this.state.studentId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (!data.message) {
                        this.setState({
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: data.email,
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
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            role: {
                id: '38157c0d-18b3-44c4-8492-efe01e90838e', //todo select role from dropdown in case of admin privilege
                name: 'student'
            }
        }
        if (this.state.studentId) {
            this.update(user)
        } else {
            this.save(user)
        }
    }

    update(user) {
        updateUser(this.state.studentId, user)
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        isSaved: true,
                        redirect: "/students/details/" + this.state.studentId
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

    save(user) {
        addUser(user)
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        isSaved: true,
                        newStudentId: data.id,
                        redirect: "/students/details/" + data.id
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
            <section id="students" className="three">
                <div className="container">
                    <h2>Nowy student</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="firstName">Imię:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="text" name="firstName" id="firstName"
                               value={this.state.firstName} required minLength="2" maxLength="200"/>
                        <span id="errorFirstName" className="errors-text"></span>

                        <label htmlFor="lastName">Nazwisko:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="text" name="lastName" id="lastName"
                               value={this.state.lastName} required minLength="2" maxLength="200"/>
                        <span id="errorLastName" className="errors-text"></span>

                        <label htmlFor="email">E-mail:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="email" name="email" id="email"
                               value={this.state.email} required minLength="3" maxLength="300"/>
                        <span id="errorEmail" className="errors-text"></span>

                        <label htmlFor="password">Hasło:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="password" name="password" id="password"
                               value={this.state.password} required minLength="8" maxLength="300"/>
                        <span id="errorEmail" className="errors-text"></span>

                        <div className="form-buttons">
                            <p id="errorsSummary" className="errors-text"></p>
                            <input className="button" type="submit" value="Zapisz"/>
                            <Link to="/students" className="button red">Anuluj</Link>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default StudentForm