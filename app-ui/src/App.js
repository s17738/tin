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
import SolutionsList from "./components/solutions/SolutionsList";
import TasksDetails from "./components/tasks/TasksDetails";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <main id="main">
                    <Switch>
                        <Route exact path="/tasks" component={TasksList}/>
                        <Route exact path="/tasks/details/:taskId" component={TasksDetails}/>
                        <Route exact path="/students" component={StudentsList}/>
                        <Route exact path="/solutions" component={SolutionsList}/>
                        <Route path="/" component={MainContent}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
