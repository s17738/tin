import React from "react"
import {Link} from "react-router-dom"

class StudentForm extends React.Component {
    render() {
        return (
            <section id="students" className="three">
                <div className="container">
                <h2>Nowy student</h2>
                <form className="form">
                    <label htmlFor="firstName">Imię:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="firstName" id="firstName" value=""/>
                    <span id="errorFirstName" className="errors-text"></span>
                    <label htmlFor="lastName">Nazwisko:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="lastName" id="lastName" value=""/>
                    <span id="errorLastName" className="errors-text"></span>
                    <label htmlFor="email">E-mail:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="email" name="email" id="email" value=""/>
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