import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Footer from './components/fragments/Footer'
import Header from './components/fragments/Header'
import MainContent from './components/fragments/MainContent'
import TasksList from "./components/tasks/TasksList";
import StudentsList from "./components/students/StudentsList";
import TasksDetails from "./components/tasks/TasksDetails";
import StudentDetails from "./components/students/StudentDetails";
import StudentForm from "./components/students/StudentForm";
import StudentDelete from "./components/students/StudentDelete";
import TaskForm from "./components/tasks/TaskForm";
import TaskDelete from "./components/tasks/TaskDelete";

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

                        <Route exact path="/students" component={StudentsList}/>
                        <Route exact path="/students/new-student" component={StudentForm}/>
                        <Route exact path="/students/edit/:studentId" component={StudentForm}/>
                        <Route exact path="/students/details/:studentId" component={StudentDetails}/>
                        <Route exact path="/students/delete/:studentId" component={StudentDelete}/>
                        <Route path="/" component={MainContent}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
