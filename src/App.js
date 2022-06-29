import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Logout from './Components/Logout';
import NavBar from './Components/NavBar';
import { Signup } from './Components/Signup';
import UserDashboard from './Components/UserDashboard';

const App = () => {
    return (
        <div className="App font-text bg-[#f1f5ee]">
            <header className="App-header sticky top-0 z-50">
                <NavBar />
            </header>
            <main>
                <Routes>
                <Route path='/' element={<Landing />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/dashboard/' element={<UserDashboard />} />
                    <Route path='/flats/' element={<h2>Flats</h2>} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
