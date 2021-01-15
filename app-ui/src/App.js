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


function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={MainContent}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
