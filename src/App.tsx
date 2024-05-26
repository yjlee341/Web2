import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import RegisterPage from "./Components/Register/RegisterPage";
import MainPage from "./Components/Main/Main";
import EventDetailPage from "./Components/Event/EventDetail";
import AddEventPage from "./Components/Event/AddEvent";
import BoothRegistPage from "./Components/Booth/Regist/BoothRegistPage";
import BoothDetailPage from "./Components/Booth/Detail/BoothDetailPage";
import GoodsManagementPage from "./Components/Booth/Regist/Goods/GoodsMangementPage";
import GoodsInfoInputPage from "./Components/Booth/Regist/Goods/GoodsInfoInputPage";
import ServiceInfoInputPage from "./Components/Booth/Regist/Service/ServiceInfoInputPage";
import ServiceManagementPage from "./Components/Booth/Regist/Service/ServiceManagementPage";
import ServiceTimeManagementPage from "./Components/Booth/Regist/Service/ServiceTimeManagementPage";
import EventManage from "./Components/Event/Manage/EventManage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage state="main" />} />
        <Route path="/list" element={<MainPage state="list" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/event/:id" element={<EventDetailPage />} />
        <Route path="/event/:id/manage" element={<EventManage />} />
        <Route path="/addEvent" element={<AddEventPage />} />
        <Route path="/boothRegist" element={<BoothRegistPage />} />
        <Route path="/boothDetail" element={<BoothDetailPage />} />
        {/* 추후 Modal로 변경 페이지*/}
        <Route path="/boothGoodsTest" element={<GoodsManagementPage />} />
        <Route
          path="/boothServiceTimeTest"
          element={<ServiceTimeManagementPage />}
        />
        <Route path="/boothGoodsTest" element={<GoodsManagementPage />} />
        <Route path="/boothServiceTest" element={<ServiceManagementPage />} />
        <Route path="/GoodsInfoPage" element={<GoodsInfoInputPage />} />
        <Route path="/ServiceInfoPage" element={<ServiceInfoInputPage />} />
      </Routes>
    </div>
  );
}

export default App;
