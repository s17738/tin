import React from "react";
import Navigation from "./Navigation";

class MainContent extends React.Component {
    render() {
        return (
            <main id="main">

                <section id="start" className="two">
                    <div className="container">
                        <header>
                            <h2>Witajcie!</h2>
                        </header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum.</p>
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

                <section id="tasks" className="two">
                    <div className="container">
                        <header>
                            <h2>Zadania</h2>
                        </header>
                        <table>
                            <tbody>
                            <tr>
                                <th>Nazwa</th>
                                <th>Opis</th>
                                <th>Data startu</th>
                                <th>Data zakończenia</th>
                                <th>Akcja</th>
                            </tr>
                            <tr>
                                <td>Zadanie 1</td>
                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                <td>11-12-2020</td>
                                <td>11-01-20201</td>
                                <td>
                                    <button className="button">Edytuj</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Zadanie 2</td>
                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                <td>11-01-20201</td>
                                <td>11-01-20201</td>
                                <td>
                                    <button className="button">Edytuj</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Zadanie 3</td>
                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                <td>11-01-20201</td>
                                <td>11-01-20201</td>
                                <td>
                                    <button className="button">Edytuj</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Zadanie 4</td>
                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                <td>11-7-2020</td>
                                <td>11-01-20201</td>
                                <td>
                                    <button className="button">Edytuj</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="students" className="three">
                    <div className="container">
                        <header>
                            <h2>Studenci</h2>
                        </header>
                        <table>
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Imię</th>
                                <th>Nazwisko</th>
                                <th>E-mail</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Student 1</td>
                                <td>Lorem</td>
                                <td>student1@dummy-mail.com</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Student 2</td>
                                <td>Ipsum</td>
                                <td>student2@dummy-mail.com</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Student 3</td>
                                <td>Dolor</td>
                                <td>student2@dummy-mail.com</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Student 4</td>
                                <td>Nunc</td>
                                <td>student4@dummy-mail.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section id="solutions" className="four">
                    <div className="container">
                        <header>
                            <h2>Rozwiązania</h2>
                        </header>
                        <table>
                            <tbody>
                            <tr>
                                <th>Zadanie</th>
                                <th>Student</th>
                                <th>Odpowiedź</th>
                                <th>Data rozwiązania</th>
                                <th>Wynik</th>
                            </tr>
                            <tr>
                                <td>Zadanie 1</td>
                                <td>Student 1</td>
                                <td>Vitae natoque dictum etiam semper</td>
                                <td>11-01-20201</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Zadanie 2</td>
                                <td>Student 1</td>
                                <td>Vitae natoque dictum etiam semper</td>
                                <td>11-01-20201</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Zadanie 3</td>
                                <td>Student 1</td>
                                <td>Vitae natoque dictum etiam semper</td>
                                <td>11-01-20201</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Zadanie 4</td>
                                <td>Student 1</td>
                                <td>Vitae natoque dictum etiam semper</td>
                                <td>11-01-20201</td>
                                <td>0</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </section>

            </main>
        );
    }
}

export default MainContent