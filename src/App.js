import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <header>
                <h1>System doskonalenia umiejętności uczniów: Wirtualne Prace Domowe</h1>
                <img src={logo} alt="logo"/>
            </header>
            <nav>
                <ul>
                    <li><a href="">Strona główna</a></li>
                    <li><a href="">Zadania</a></li>
                    <li><a href="">Uczniowie</a></li>
                    <li><a href="">Rozwiązania</a></li>
                </ul>
            </nav>
            <main>
                <h2>Strona główna</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </main>
            <footer>
                Gall Anonim, s17738
            </footer>
        </div>
    );
}

export default App;
