import React from "react";

function MainContent() {
    return (
        <section id="start" className="two">
            <div className="container">
                <header>
                    <h2>Witajcie!</h2>
                </header>
                <form method="post" action="#">
                    <div className="row">
                        <div className="row-half"><input type="text" name="email" placeholder="E-mail"/></div>
                        <div className="row-half"><input type="password" name="password" placeholder="Hasło"/></div>
                        <div className="row-start">
                            <input type="submit" value="Zaloguj"/>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default MainContent