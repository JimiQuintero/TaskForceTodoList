import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Dashboard";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route index element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default AppRoutes;
