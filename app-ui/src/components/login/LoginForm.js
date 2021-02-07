import React from "react";
import {loginUser} from "../../api/usersApi";
import {Redirect} from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoggedIn: false,
            userId: '',
            userName: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    saveSession(username, id) {
        localStorage.setItem('userId', id);
        localStorage.setItem('userName', username);
    }

    handleSubmit(event) {
        event.preventDefault();
        let userLogin = {
            email: this.state.email,
            password: this.state.password
        }
        this.login(userLogin)
    }

    login(userLogin) {
        loginUser(userLogin)
            .then(resp => resp.json())
            .then((data) => {
                    this.setState({
                        isLoggedIn: true,
                        userId: data.id,
                        userName: data.firstName + ' ' + data.lastName
                    });
                    this.saveSession(data.firstName + ' ' + data.lastName, data.id)
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
        const {userId} = this.state
        if (userId) {
            return <Redirect to="/"/>
        }
        return (
            <section id="start" className="two">
                <div className="container">
                    <h2>Witajcie!</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <label htmlFor="answer">E-mail:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="text" name="email" id="email" placeholder="e-mail"
                               value={this.state.email} required/>
                        <span id="errorDescription" className="errors-text"></span>

                        <label htmlFor="answer">Hasło:<abbr title="wymagane" aria-label="required">*</abbr></label>
                        <input onChange={this.handleChange} type="password" name="password" id="password"
                               placeholder="Hasło"
                               value={this.state.password} required/>
                        <span id="errorDescription" className="errors-text"></span>

                        <div className="form-buttons">
                            <p id="errorsSummary" className="errors-text"></p>
                            <input className="button" type="submit" value="Zaloguj"/>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default LoginForm