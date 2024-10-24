import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import NotFoundPage from "../pages/NotFoundPage";
import Account from "../pages/Account";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="account" element={<Account />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
