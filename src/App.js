import { Route, Routes } from 'react-router-dom';
import './App.css';
import FlatsEditor from './Components/FlatsEditor';
import FlatsList from './Components/FlatsList';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Logout from './Components/Logout';
import NavBar from './Components/NavBar';
import { Signup } from './Components/Signup';
import UserDashboard from './Components/UserDashboard';

const App = () => {
    return (
        <div className="App font-text bg-[#f1f5ee] min-h-screen flex flex-col justify-between">
            <header className="App-header sticky top-0 z-50">
                <NavBar />
            </header>
            <main className='mb-auto'>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/dashboard/' element={<UserDashboard />} />
                    <Route path='/flats/editor' element={<FlatsEditor />} />
                    <Route path='/flats/editor/:flatId' element={<FlatsEditor />} />
                    <Route path='/flats/' element={<FlatsList />} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
