import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';

const App = () => {
    return (
        <div className="App font-text">
            <header className="App-header">
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Landing />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
