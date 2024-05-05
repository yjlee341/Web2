import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import { useNavigate } from "react-router-dom";
import RegisterPage from "./Components/Register/RegisterPage";

function App() {
  const navi = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
