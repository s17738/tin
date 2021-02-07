import React from "react";
import {Redirect} from "react-router-dom";

function LoggedIn() {

    const [value,] = React.useState(
        localStorage.getItem('userName')
    );

    const loggedIn = (
        <section id="start" className="two">
            <div className="container">
                <h2>Witaj! {value}</h2>
            </div>
        </section>
    )
    if (value) {
        return loggedIn
    } else {
        return <Redirect to="/login"/>
    }
}

export default LoggedIn