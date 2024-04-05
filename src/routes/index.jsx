import { Routes, Route } from "react-router-dom";
import LoginScreen from "../pages/authentication/LoginScreen";
LoginScreen;

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
    </Routes>
  );
};

export default Approutes;
