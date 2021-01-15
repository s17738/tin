import React from "react";

function TasksList() {
    return (
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
    );
}

export default TasksList