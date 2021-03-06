import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Footer from './components/fragments/Footer'
import Header from './components/fragments/Header'
import TasksList from "./components/tasks/TasksList";
import StudentsList from "./components/students/StudentsList";
import TasksDetails from "./components/tasks/TasksDetails";
import StudentDetails from "./components/students/StudentDetails";
import StudentForm from "./components/students/StudentForm";
import StudentDelete from "./components/students/StudentDelete";
import TaskForm from "./components/tasks/TaskForm";
import TaskDelete from "./components/tasks/TaskDelete";
import SolutionForm from "./components/solutions/SolutionForm";
import SolutionDelete from "./components/solutions/SolutionDelete";
import LoginForm from "./components/login/LoginForm";
import LoggedIn from "./components/login/LoggedIn";
import LogOut from "./components/login/Logout";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <main id="main">
                    <Switch>
                        <Route exact path="/tasks" component={TasksList}/>
                        <Route exact path="/tasks/details/:taskId" component={TasksDetails}/>
                        <Route exact path="/tasks/new-task" component={TaskForm}/>
                        <Route exact path="/tasks/edit/:taskId" component={TaskForm}/>
                        <Route exact path="/tasks/delete/:taskId" component={TaskDelete}/>
                        <Route exact path="/tasks/details/:taskId/new-solution" component={SolutionForm}/>
                        <Route exact path="/tasks/details/:taskId/edit-solution/:solutionId" component={SolutionForm}/>
                        <Route exact path="/tasks/details/:taskId/delete-solution/:solutionId" component={SolutionDelete}/>

                        <Route exact path="/students" component={StudentsList}/>
                        <Route exact path="/students/new-student" component={StudentForm}/>
                        <Route exact path="/students/edit/:studentId" component={StudentForm}/>
                        <Route exact path="/students/details/:studentId" component={StudentDetails}/>
                        <Route exact path="/students/delete/:studentId" component={StudentDelete}/>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/logout" component={LogOut}/>
                        <Route path="/" component={LoggedIn}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
