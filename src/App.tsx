import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import EventListPage from "./Components/Event/List/EventListPage";
import BoothListPage from "./Components/Booth/List/BoothListPage";
import SearchResultPage from "./Components/Search/SearchResultPage";
import RegistLocationPage from "./Components/Booth/Regist/Location/RegistLocationPage";
import RequestLayout from "./Components/Layout/RequestLayout";
import BoothAproval from "./Components/Event/Manage/BoothAproval";
import EventAproval from "./Components/Admin/EventAproval";
import ServiceTimeAdd from "./Components/Booth/Regist/Service/ServiceTimeAdd";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  //TODO: 임시 데이터. 나중에 모달 연결하면 지울 것
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatsPerRow = [10, 13, 10, 8, 9, 11, 12, 10, 8, 9];
  const bookingStatus = {
    confirmed: [
      "A1",
      "A2",
      "A3",
      "B4",
      "B5",
      "C6",
      "C7",
      "D8",
      "E9",
      "F10",
      "G11",
      "H12",
      "I1",
      "J2",
      "B13",
    ],
    reserved: [
      "A4",
      "A5",
      "B1",
      "B2",
      "C1",
      "D1",
      "D2",
      "E1",
      "E2",
      "F1",
      "G1",
      "H1",
      "I2",
      "J3",
    ],
    available: [
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "B3",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "B12",
      "C2",
      "C3",
      "C4",
      "C5",
      "C8",
      "C9",
      "C10",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "E3",
      "E4",
      "E5",
      "E6",
      "E7",
      "E8",
      "E10",
      "E11",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F11",
      "F12",
      "G2",
      "G3",
      "G4",
      "G5",
      "G6",
      "G7",
      "G8",
      "G9",
      "G10",
      "G12",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H7",
      "H8",
      "H9",
      "H10",
      "H11",
      "I3",
      "I4",
      "I5",
      "I6",
      "I7",
      "I8",
      "I9",
      "I10",
      "J1",
      "J4",
      "J5",
      "J6",
      "J7",
      "J8",
      "J9",
    ],
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!isAuthPage && <NavBar />}
      <Routes>
        <Route path="/" element={<MainPage state="main" />} />
        <Route path="/EventListPage" element={<EventListPage />} />
        <Route path="/addEvent" element={<AddEventPage />} />
        <Route path="/BoothListPage" element={<BoothListPage />} />
        <Route path="/SearchResultPage" element={<SearchResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route
          path="/event/:id/manage"
          element={
            <RequestLayout header="부스 신청" side="부스 신청 현황">
              <BoothAproval />
            </RequestLayout>
          }
        />
        <Route
          path="/admin/eventmanage"
          element={
            <RequestLayout header="행사 신청" side="행사 신청 현황">
              <EventAproval />
            </RequestLayout>
          }
        />
        <Route path="/boothRegist" element={<BoothRegistPage />} />
        <Route path="/booths/:id" element={<BoothDetailPage />} />
        {/* 추후 Modal로 변경 페이지*/}
        <Route path="/boothGoodsTest" element={<GoodsManagementPage />} />
        <Route
          path="/ServiceManagementPage"
          element={<ServiceManagementPage />}
        />
        <Route path="/GoodsInfoPage" element={<GoodsInfoInputPage />} />
        <Route path="/ServiceInfoPage" element={<ServiceInfoInputPage />} />
        <Route
          path="/RegistLocation"
          element={
            <RegistLocationPage
              imageSrc="https://via.placeholder.com/96"
              rows={rows}
              seatsPerRow={seatsPerRow}
              bookingStatus={bookingStatus}
            />
          }
        />
        <Route
          path="/ServiceTimeAdd"
          element={
            <ServiceTimeAdd
              startDate={new Date(2024, 5, 23)}
              endDate={new Date(2024, 5, 30)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
