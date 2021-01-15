import React from "react";
import logo from "../../images/logo.svg";
import Navigation from "./Navigation";

function Header() {
    return (
        <div id="header">
            <div className="top">
                <div id="logo">
                    <span className="image logo"><img src={logo} alt="logo"/></span>
                    <h1 id="title">WPD</h1>
                    <p>Wirtualne <br/>Prace Domowe</p>
                </div>
                <Navigation/>
            </div>
        </div>
    );
}

export default Header