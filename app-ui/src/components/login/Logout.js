import React from "react";
import {Redirect} from "react-router-dom";

class LogOut extends React.Component {

    componentDidMount() {
        localStorage.removeItem('userName')
        localStorage.removeItem('useId')
    }

    render() {
        return <Redirect to="/login"/>
    }
}

export default LogOut