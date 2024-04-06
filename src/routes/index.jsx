import { Routes, Route } from "react-router-dom";
import LoginScreen from "../pages/authentication/LoginScreen";
import DashboardLayout from "../layout";
import HomeDashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
NotFound;

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/users" element={<Users />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Approutes;
