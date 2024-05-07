import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./Components/Register/RegisterPage";
import MainPage from "./Components/Main/Main";
import ListPage from "./Components/Main/List";

function App() {
  const navi = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage state="main" />} />
        <Route path="/list" element={<MainPage state="list" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
