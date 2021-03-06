import "./App.css";
import { Route, Routes } from "react-router-dom";
import FlatsEditor from "./Components/FlatsEditor";
import FlatsList from "./Components/FlatsList";
import Footer from "./Components/Footer";
import HowToUse from "./Components/HowToUse";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import { Signup } from "./Components/Signup";
import UserDashboard from "./Components/UserDashboard";
import FAQ from "./Components/FAQ";
import FlatDetail from "./Components/FlatDetail";
import { ToastContainer } from "react-toastify";
import TimeSheet from "./Components/TimeSheet";
import Booking from "./Components/Booking";

const App = () => {
  return (
    <div className="App font-text bg-[#f1f5ee] min-h-screen flex flex-col justify-between">
      <ToastContainer />
      <header className="App-header sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="mb-auto z-5">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard/" element={<UserDashboard />} />
          <Route path="/flats/editor" element={<FlatsEditor />} />
          <Route path="/flats/editor/:flatId" element={<FlatsEditor />} />
          <Route path="/flats/:flatId" element={<FlatDetail />} />
          <Route path="/flats/" element={<FlatsList />} />
          <Route path="/timesheets/" element={<TimeSheet />} />
          <Route path="/how2use" element={<HowToUse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/bookings/flats/:flatId" element={<Booking />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
