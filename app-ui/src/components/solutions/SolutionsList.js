import React from "react";
import {getSolutionsListByTaskId} from "../../api/tasksApi";
import {Link} from "react-router-dom";
import SolutionsListTable from "./SolutionsListTable";

class SolutionsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            taskId: props.taskId,
            isLoaded: false,
            solutions: []
        }
    }

    fetchList = () => {
        getSolutionsListByTaskId(this.state.taskId)
            .then(res => res.json())
            .then((data) => {
                    this.setState({
                        isLoaded: true,
                        solutions: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchList()
    }

    render() {
        const {taskId, error, isLoaded, solutions} = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Ładowanie danych...</p>
        } else {
            content = <SolutionsListTable solutionsList={solutions}/>
        }
        return (
            <section id="solutions" className="four">
                <div className="container">
                    <header>
                        <h2>Rozwiązania</h2>
                    </header>
                    {content}
                    <Link to={`/tasks/details/${taskId}/new-solution`} className="button">Dodaj rozwiązanie</Link>
                </div>
            </section>
        );
    }
}

export default SolutionsList