import React from "react";

function StudentsList() {
    return (
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
    );
}

export default StudentsList