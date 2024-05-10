import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./Components/Register/RegisterPage";
import MainPage from "./Components/Main/Main";
import EventDetailPage from "./Components/Event/EventDetail";
import AddEventPage from "./Components/Event/AddEvent";

function App() {
  const navi = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage state="main" />} />
        <Route path="/list" element={<MainPage state="list" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/addEvent" element={<AddEventPage />} />
      </Routes>
    </div>
  );
}

export default App;
